import React from 'react';
import {Link} from 'react-router-dom';  
import './Init.css';

const Init = () => {
    return(
        <div className="InitOuterContainer">
            <div className="InitInnerContainer">
                <div>
                    <h1 className="heading">Solstício</h1>
                    <Link to={`/Join`}>
                    <button className="button mt-20" type="submit">Entre</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Init;