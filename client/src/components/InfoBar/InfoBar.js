import React from 'react';

import closeIcon from '../../icones/closeIcon.png';
import onlineIcon from '../../icones/onlineIcon.png';
import iconSalas from '../../icones/iconSalas.png';
import iconUsers from '../../icones/iconUsers.png';
import './InfoBar.css';


const InfoBar = ({ sala }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <label for="menuSalas" className="menuSalas">
                <img src={iconSalas}></img>
            </label>
            <img className="onlineIcon" src={onlineIcon} alt="ícone online"/>
            <h3>{sala}</h3>
        </div>
        <div className="rightInnerContainer">
            <label for="menuUsers" className="menuUsers">
                <img src={iconUsers}></img>
            </label>
            <a href="/">
                <img src={closeIcon} alt="ícone fechar"/>
            </a>
        </div>
    </div>
)

export default InfoBar;