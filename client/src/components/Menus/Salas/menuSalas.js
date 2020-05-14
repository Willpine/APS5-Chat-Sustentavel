import React from 'react';
import './menuSalas.css';

const MenuSalas = ({a}) =>(
    <div>
    <input type="checkbox" id="menuSalas" name="menuSalas"></input>
    <nav className="menuEsq">
        <ul>
            <li><a>Sala1</a></li>
            <li><a>Sala2</a></li>
        </ul>
    </nav>
    </div>
)
export default MenuSalas;