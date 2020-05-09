import React from 'react';

import './Mensagem.css';


import ReactEmoji from 'react-emoji';
let data = new Date();
let horas = data.getHours();
let minutos = data.getMinutes();
let horaMsgEnviada = horas + ':' + minutos; 

const Mensagem = ({ mensagem: { user, texto }, nome }) => {
    let mensagemUsuarioAtual = false;

    const nomeFormatado = nome.trim().toLowerCase();

    if (user === nomeFormatado) {
        mensagemUsuarioAtual = true;
    }

    return (
        mensagemUsuarioAtual ? (
            <div className="containerMensagem justifyEnd">
                {/* <p className="textoEnviado pr-10">{nomeFormatado}</p> */}
                <div className="mensagemRetangulo backgroundBlue">
                    <p className="mensagemTexto colorWhite">{ReactEmoji.emojify(texto)}</p>
                </div>
                <p className="hora pl-10">{horaMsgEnviada}</p>
            </div>
        ) : (
                <div className="containerMensagem justifyStart">
                    <p className="hora pr-10">{horaMsgEnviada}</p>
                    <div className="mensagemRetangulo backgroundLight">
                        <p className="mensagemTexto colorDark">{ReactEmoji.emojify(texto)}</p>
                    </div>
                    <p className="textoEnviado pl-10">{user}</p>
                </div>
            )
    )

}

export default Mensagem;