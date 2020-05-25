// UseState é um hook que permite usar hooks dentro de componentes
// baseados em funções, enquanto link, vai ligar Join ao caminho /Chat.
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './Join.css';

const Join = () => {
    // Obs: Hooks são declarados apenas dentro das funções.
    // Hooks são declarados usando const, um array contendo uma variável,
    // nesse caso nome, e uma função setter, igual a useState e por fim,
    // um valor inicial para aquela variável, nesse caso, nome, o valor
    // inicial é um string vazio.
    const [nome, setNome] = useState('');
    const [nomeCad, setNomeCad] = useState('');
    // TODO : mudar para público ao fim do tutorial.
    const [sala, setSala] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    // <Link onClick={event => (!nome || !sala) ? event.preventDefault() : null}
    //             to={`/Chat?nome=${nome}&sala=${sala}`}>
    //                 <button className="button mt-20" type="submit">Login</button>
    //             </Link>

    //const login = (event) => {(!nome || !sala) ? event.preventDefault() : null}

    return (
        // O código a seguir é JSX e não HTML, e representa o front.
        // mt-20 => margin-top=20
        // onChange são os Event Listeners, neles, é especificado que:
        // Toda vez que alguém clicar ou digitar no input, ele vai setar
        // o nome e a sala com os valores inseridos.
        // Link irá redirecionar o usuário, com seu nome e sua sala na URL.
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
            <div style={{border:'1px'}}>
                <h1 className="heading">Solstício</h1>
                <div>
                    <input placeholder="Nome" className="joinInput"
                    type="text" onChange={(event) => setNome(event.target.value)} />
                </div>
                <div>
                <Link onClick={event => (!nome) ? event.preventDefault() : null}
                    to={`/Chat?nome=${nome}&sala=sala1`}>
                <button className="roombutton mt-20" type="submit">Sala 1</button>
                </Link>
                <Link onClick={event => (!nome) ? event.preventDefault() : null}
                    to={`/Chat?nome=${nome}&sala=sala2`}>
                <button className="roombutton mt-20" type="submit">Sala 2</button>
                </Link>
                <Link onClick={event => (!nome) ? event.preventDefault() : null}
                    to={`/Chat?nome=${nome}&sala=sala3`}>
                <button className="roombutton mt-20" type="submit">Sala 3</button>
                </Link>
                <Link onClick={event => (!nome) ? event.preventDefault() : null}
                    to={`/Chat?nome=${nome}&sala=sala4`}>
                <button className="roombutton mt-20" type="submit">Sala 4</button>
                </Link>
                <Link onClick={event => (!nome) ? event.preventDefault() : null}
                    to={`/Chat?nome=${nome}&sala=sala5`}>
                <button className="roombutton mt-20" type="submit">Sala 5</button>
                </Link>
                <Link onClick={event => (!nome) ? event.preventDefault() : null}
                    to={`/Chat?nome=${nome}&sala=sala6`}>
                <button className="roombutton mt-20" type="submit">Sala 6</button>
                </Link>
                </div>
                </div>

                <div style={{}}>
                    <h1 className="heading">Sem cadastro?</h1>
                    <div>
                        <input placeholder="Nome" className="joinInput"
                        type="text" onChange={(event) => setNomeCad(event.target.value)} />
                    </div>
                    <div>
                        <input placeholder="Senha" className="joinInput mt-20"
                        type="text" onChange={(event) => setSenha(event.target.value)} />
                        <input placeholder="Confirme a senha" className="joinInput mt-20"
                        type="text" onChange={(event) => setConfirmaSenha(event.target.value)} />
                        </div>
                    <Link onClick={event => (!nomeCad || !confirmaSenha || !senha || senha !== confirmaSenha) ? event.preventDefault() : null}
                    to={`/Chat?nome=${nome}&sala=${sala}`}>
                        <button className="button mt-20" type="submit">Cadastrar</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Join;