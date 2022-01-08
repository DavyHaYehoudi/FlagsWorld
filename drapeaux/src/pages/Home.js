import React from 'react';
import Countries from '../components/Countries';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const Home = () => {
    return (
        <div>
                <Navigation />
                <Logo />
                <Countries />

            Page Accueil
        </div>
    );
};

export default Home;