import React from 'react';
import imgLogo from '../logo192.png'

const Logo = () => {
    return (
        <div className = 'logo'>
            <img src= { imgLogo } alt='logo'/>
            <h3>Flags World</h3>
        </div>
    );
};

export default Logo;