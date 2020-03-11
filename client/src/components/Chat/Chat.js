// Os hooks sempre ficam dentro de chaves e o useEffect
// nos permite usar métodos lifecycle.
import React, { useState, useEffect } from "react";

// Esse módulo nos permite pegar parâmetros da URL
import queryString from 'query-string';

import io from 'socket.io-client';

import Mensagens from '../Mensagens/Mensagens';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

let socket;

// location vem do react-router e nos dá um prop chamado location
// location.search nos devolve nossa url
// queryString.parse retorna apenas os parâmetros da URL
const Chat = ({ location }) => {
    const [nome, setNome] = useState('');
    const [sala, setSala] = useState('');
    const [users, setUsers] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [mensagens, setMensagens] = useState([]);
    const ENDPOINT = 'localhost:5000';

    useEffect ( () => {
        const {nome, sala} = queryString.parse(location.search);

        // Podemos emitir diferentes eventos utilizando esta
        // instância de socket. Ele aponta para o socket do server.
        socket = io(ENDPOINT);

        setNome(nome);
        setSala(sala);
        
        // Isso emite um evento a partir do socket do client
        // podemos passar dados também, como objetos. Nesse caso
        // emitiremos o evento join e nossos parâmetros.
        socket.emit('join', { nome, sala }, () => {

        });

        // O return serve pra fazer o unmount da função
        return () => {
            socket.emit('disconnect');

            socket.disconnect();
        }
    } , [ENDPOINT, location.search]);

    useEffect( () => { // Toda vez que mensagens mudar
        socket.on('mensagem', (mensagem) => {
            setMensagens([...mensagens, mensagem]);
        }); console.log(mensagens)

        return () => {
            socket.emit('disconnect');
      
            socket.off();
          }
    }, [mensagens]);

    // TODO Função de mandar mensagens
    const enviaMensagem = (event) => {
        event.preventDefault();

        if(mensagem){
        socket.emit('enviaMensagem', mensagem, () => setMensagem(''));
        }
    }

    //console.log(mensagem, mensagens);

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar sala={sala}/>
                <Mensagens mensagens={mensagens} nome={nome}/>
                <Input mensagem={mensagem} setMensagem={setMensagem}
                    enviaMensagem={enviaMensagem}/>
            </div>
        </div>
    )
}

export default Chat;