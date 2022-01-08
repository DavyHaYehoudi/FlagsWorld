import React, { useEffect } from 'react';
import axios from 'axios';

const Countries = () => {

useEffect(()=> {
    axios
    .get( "https://www.prevision-meteo.ch/services/json/lat=46.259lng=5.235")
    .then(res => console.log(res.data))
    .catch(err => console.log('erreur de get :',err))
},[])

    return (
        <div>
            
        </div>
    );
};

export default Countries;