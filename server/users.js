// Aqui vão ter funções utilitárias para se gerenciar usuários.

const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SOU@esperto10",
    database: "chatambiental"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

//   con.query("SELECT * FROM USUARIO", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);})

const users = [];

const addUser = ({ id, nome, sala }) => {

    nome = nome.trim().toLowerCase();
    sala = sala.trim().toLowerCase();

    const existingUser = users.find( (user) => user.sala === sala && user.nome === nome);

    if(existingUser){
        return { erro: 'Nome de usuário já está em uso.'};
    }

    const user = { id, nome, sala};

    users.push(user);

    return { user };
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1){
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersSala = (sala) => users.filter((user) => user.sala = sala);

module.exports = { addUser, removeUser, getUser, getUsersSala};