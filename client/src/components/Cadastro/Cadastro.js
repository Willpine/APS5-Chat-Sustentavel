import React from 'react';
import {Link} from 'react-router-dom';  
import './Cadastro.css';

const Cadastro = () => {
    return(
        <div className="CadOuterContainer">
            <div className="CadInnerContainer">
                <div>
                    <h1 className="heading">Cadastre-se abaixo</h1>
                    <div className="cadInputs">
                        <p>Escolha um nome de usuário</p>
                        <input placeholder="Nome" className="cadInput"
                        type="text"/>
                        <p>Escolha uma senha</p>
                        <input placeholder="Senha" className="cadInput"
                        type="password"/>
                        <p>Digite sua senha novamente</p>
                        <input placeholder="Senha" className="cadInput"
                        type="password"/>
                        <Link to={`/Join`}>
                        <button className="button mt-20" type="submit">Cadastrar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cadastro;