import React from 'react';
import './menuSalas.css';
import {Link} from 'react-router-dom';

const MenuSalas = ({nome,sala}) =>(
    <div>
    <input type="checkbox" id="menuSalas" name="menuSalas"></input>
    <nav className="menuEsq">
        <ul>
                
        <li><a href={`/Chat?nome=${nome}&sala=Auditório`}>Auditório</a></li>
            
        <li><a href={`/Chat?nome=${nome}&sala=Planetário`}>Planetário</a></li>

        <li><a href={`/Chat?nome=${nome}&sala=Portões`}>Portões</a></li>
        

        </ul>
    </nav>
    </div>
)
export default MenuSalas;