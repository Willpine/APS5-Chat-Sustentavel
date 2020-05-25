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
    // TODO : mudar para público ao fim do tutorial.
    const [sala, setSala] = useState('');
    function choice(id1) {
        let id = id1;
        let sala = ''
        if (id == "um"){
            document.querySelector("."+id).style.cssText ="background-color: #1A1A1D; color: white"
            document.querySelector('.dois').style.cssText ="background-color: white; color: #1A1A1D"
            document.querySelector('.tres').style.cssText ="background-color: white; color: #1A1A1D"
            sala="Auditório"
        }
        else if (id == "dois"){
            document.querySelector("."+id).style.cssText ="background-color: #1A1A1D; color: white"
            document.querySelector('.um').style.cssText ="background-color: white; color: #1A1A1D"
            document.querySelector('.tres').style.cssText ="background-color: white; color: #1A1A1D"
            sala="Planetário"
        }
        else{
            document.querySelector("."+id).style.cssText ="background-color: #1A1A1D; color: white"
            document.querySelector('.um').style.cssText ="background-color: white; color: #1A1A1D"
            document.querySelector('.dois').style.cssText ="background-color: white; color: #1A1A1D"
            sala="Portões"
        }
        setSala(sala)
    }
    return (
        // O código a seguir é JSX e não HTML, e representa o front.
        // mt-20 => margin-top=20
        // onChange são os Event Listeners, neles, é especificado que:
        // Toda vez que alguém clicar ou digitar no input, ele vai setar
        // o nome e a sala com os valores inseridos.
        // Link irá redirecionar o usuário, com seu nome e sua sala na URL.
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <input placeholder="Nome" className="joinInput"
                    type="text" onChange={(event) => setNome(event.target.value)} />
                    <input placeholder="Senha" className="joinInput"
                    type="password"/>
                </div>
                {/* <div>
                    <input placeholder="Sala" className="joinInput mt-20"
                    type="text" onChange={(event) => setSala(event.target.value)} />
                </div> */}
                <div className="salas mt-20">
                    <p className="um" onClick={() => choice('um')}>Auditório</p>
                    <p className="dois"onClick={() => choice('dois')}>Planetário</p>
                    <p className="tres"onClick={() => choice('tres')}>Portões</p>
                </div>
                <Link onClick={event => (!nome || !sala) ? event.preventDefault() : null}
                to={`/Chat?nome=${nome}&sala=${sala}`}>
                    <button className="button mt-20" type="submit">Entrar</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;