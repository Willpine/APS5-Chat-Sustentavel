// Essas declarações são como imports, mas para NodeJS
const express = require('express');
const socketio = require('socket.io'); // Gerencia nossos WebSockets
const http = require('http'); // Gerencia as requests Http
const cors = require('cors');

//comentário de teste

const { addUser, removeUser, getUser, getUsersSala } = require('./users');

// Durante o desenvolvimento, usaremos a porta 5000, porém após o
// Deploy, usaremos a porta localizada em process.env.PORT
const PORT = process.env.PORT || 5000

const router = require('./router'); 

// Inicializa o Servidor
const app = express();
const server = http.createServer(app);
// Instância de socket do server. Esse socket funcionará como um listener
// para o server, recebendo e enviando comandos como 'connection', 'join',
// 'enviaMensagem', 'disconnect', 'mensagem', etc. Toda vez que em algum
// lugar um socket emitir um comando, ele será escutado por essas
// implementações.
const io = socketio(server)

app.use(router);
app.use(cors());// cors cross-origin-resource-sharing

// Quando o server receber a mensagem 'connection' ele irá instanciar
// cada um desses socket listeners.
io.on('connection', (socket) => {
    // Callback será usado para tratamento de erros. o primeiro parâmetro
    // são parâmetros, enquanto o segundo é basicamente uma função que
    // podemos chamar ao final da execução, tratando erros por exemplo.
    socket.on('join', ({ nome,sala }, callback) => {
        // addUser pode retornar tanto um erro, quanto um usuário.
        const { erro, user} = addUser({ id: socket.id, nome, sala});

        // Se houver um erro, esse return encerra a func.
        if(erro) return callback(erro);

        // Quando o usuário entrar, essa mensagem será disparada.
        // broadcast manda uma mensagem pra todo mundo exceto aquele
        // usuário específico.
        socket.broadcast.to(user.sala).emit('mensagem', { user: 'admin',
            texto: `${user.nome} entrou na sala`});

        // Se não, um usuário é inserido na sala
        socket.join(user.sala);

        io.to(user.sala).emit('infoSala', {sala: user.sala, users: getUsersSala(user.sala)});

        callback();

    });

    socket.on('enviaMensagem', (mensagem, callback) => {
        const user = getUser(socket.id);
        io.to(user.sala).emit('mensagem', { user: user.nome, texto: mensagem});

        callback();
    });

    socket.on('enviaArquivo', (arquivo, callback) => {
        const user = getUser(socket.id);
        
        io.to(user.sala).emit('mensagem', {user: user.nome, imagem: arquivo});

        callback();
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if(user)
        io.to(user.room).emit('mensagem', {user:'admin', texto:`${user.name} saiu da sala`})
    });
});

app.use(router);

server.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));