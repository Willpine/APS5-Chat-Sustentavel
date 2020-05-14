import React from 'react';
import './menuUsers.css'

const MenuUsers = ({b}) =>(
    <div>
    <input type="checkbox" id="menuUsers" name="menuUsers"></input>
    <nav className="menuDir">
        <ul>
            <li><a>User1</a></li>
            <li><a>User2</a></li>
        </ul>
    </nav>
    </div>
)
export default MenuUsers;