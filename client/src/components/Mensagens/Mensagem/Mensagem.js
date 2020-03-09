import React from 'react';

import './Mensagem.css';

import ReactEmoji from 'react-emoji';

const Mensagem = ({ mensagem: { user, texto }, nome }) => {
    let mensagemUsuarioAtual = false;

    const nomeFormatado = nome.trim().toLowerCase();

    if (user === nomeFormatado) {
        mensagemUsuarioAtual = true;
    }

    return (
        mensagemUsuarioAtual ? (
            <div className="containerMensagem justifyEnd">
                <p className="textoEnviado pr-10">{nomeFormatado}</p>
                <div className="mensagemRetangulo backgroundBlue">
                    <p className="mensagemTexto colorWhite">{ReactEmoji.emojify(texto)}</p>
                </div>
            </div>
        ) : (
                <div className="containerMensagem justifyStart">
                    <div className="mensagemRetangulo backgroundLight">
                        <p className="mensagemTexto colorDark">{ReactEmoji.emojify(texto)}</p>
                    </div>
                    <p className="textoEnviado pl-10">{user}</p>
                </div>
            )
    )

}

export default Mensagem;