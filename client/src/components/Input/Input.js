import React from 'react';

import './Input.css';

const Input = ({mensagem, setMensagem, enviaMensagem}) => (
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
        <button className="sendButton" onClick={(event) => enviaMensagem(event)}>Enviar</button>
    </form>
)

export default Input;