import React from 'react';
import { Link } from 'react-router-dom';

import './Mensagem.css';


import ReactEmoji from 'react-emoji';
let data = new Date();
let horas = data.getHours();
let minutos = data.getMinutes();
let horaMsgEnviada = horas + ':' + minutos; 

const Mensagem = ({ mensagem: { user, texto, imagem }, nome }) => {

    let mensagemUsuarioAtual = false;
    let isImagem = false;

    const nomeFormatado = nome.trim().toLowerCase();
    
    if (user === nomeFormatado) {
        mensagemUsuarioAtual = true;
    }

    if (imagem) {
        isImagem = true;
            var arrayBufferView = new Uint8Array( imagem);
            var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
            var urlCreator = window.URL || window.webkitURL;
            var imagemUrl = urlCreator.createObjectURL( blob );
    }

    if(isImagem===false){
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
    )}else{
        return ( 
            mensagemUsuarioAtual ? (
                <div className="containerMensagem justifyEnd">
                    <p className="textoEnviado pr-10">{nomeFormatado}</p>
                    <div className="mensagemRetangulo backgroundBlue">
                    <a href={imagemUrl} download="imagem">
                    <img src={imagemUrl} id="output" width="200" />
                    </a>
                    </div>
                </div>
            ) : (
                    <div className="containerMensagem justifyStart">
                        <div className="mensagemRetangulo backgroundLight">
                        <a href={imagemUrl} download="imagem">
                        <img src={imagemUrl} id="output" width="200" />	
                        </a>
                        </div>
                        <p className="textoEnviado pl-10">{user}</p>
                    </div>
                )
        )
    }

}

export default Mensagem;