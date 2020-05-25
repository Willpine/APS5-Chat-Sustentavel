import React from 'react';
import './menuSalas.css';
import {Link} from 'react-router-dom';

const MenuSalas = ({nome,sala}) =>(
    <div>
    <input type="checkbox" id="menuSalas" name="menuSalas"></input>
    <nav className="menuEsq">
        <ul>
                
        <li><Link to={`/Chat?nome=${nome}&sala=Auditório`}>Auditório</Link></li>
            
        <li><Link to={`/Chat?nome=${nome}&sala=Planetário`}>Planetário</Link></li>

        <li><Link to={`/Chat?nome=${nome}&sala=Portões`}>Portões</Link></li>
        

        </ul>
    </nav>
    </div>
)
export default MenuSalas;