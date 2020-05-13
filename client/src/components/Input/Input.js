import React from 'react';

import './Input.css';

const Input = ({mensagem, setMensagem, enviaMensagem, enviaArquivo, defineArquivo, limpaArquivo }) => (
    <form className="form">
        <input
            className="input"
            type="text"
            placeholder="Digite algo..."
            value={mensagem}
            onChange={(event) => setMensagem(event.target.value)}
            onKeyPress={event => 
                    event.key === 'Enter' ? enviaMensagem(event) : null}
        />

        <input type="file" id="attach"  className="botaoInvisivel" onChange={(event) => defineArquivo(event.target.files[0])}/>
        <label htmlFor="attach"  className="attachButton">+</label>
        <button className="sendButton" onClick={(event) => {
            event.preventDefault();
            enviaMensagem(event)
        }}>Enviar</button>


    </form>
)

export default Input;