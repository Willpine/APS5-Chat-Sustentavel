import React from 'react';
import './menuUsers.css'

const MenuUsers = ({users}) =>(
    <div>
    <input type="checkbox" id="menuUsers" name="menuUsers"></input>
    <nav className="menuDir">
        <ul>
        {users.map((user, i) => <li key={i}>{user.nome}</li>)}
        </ul>
    </nav>
    </div>
)
export default MenuUsers;