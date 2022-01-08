import React from 'react';
import { Link, NavLink } from 'react-router-dom';
 

const Navigation = () => {

    
    return (
        <div>
            <ul className = 'navigation '>
                <li><NavLink to='/' className={(navData) => navData.isActive ? 'nav-active' :''}>Accueil </NavLink></li>
                <li><NavLink to='/about' className={(navData) => navData.isActive ? 'nav-active' :''}>A propos </NavLink></li>
            </ul>
        </div>
    );
};

export default Navigation;