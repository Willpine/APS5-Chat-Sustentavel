import React from 'react';

import closeIcon from '../../icones/closeIcon.png';
import onlineIcon from '../../icones/onlineIcon.png';

import './InfoBar.css';

const InfoBar = ({ sala }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="ícone online"/>
            <h3>{sala}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/">
                <img src={closeIcon} alt="ícone fechar"/>
            </a>
        </div>
    </div>
)

export default InfoBar;