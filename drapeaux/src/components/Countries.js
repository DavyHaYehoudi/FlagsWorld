import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {

    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(40);
    const [selectedContinent, setSelectedContinent] = useState('');

    const continents = ["Africa", "America", "Asia", "Europe", "Oceania"]

useEffect(()=> {

    axios
    .get( "https://restcountries.com/v2/all?fields=name,population,region,capital,flag")
    .then(res => setData(res.data))
   
},[])


    return (
        <div className = 'countries'>
            <div className = "sort-container">
                    <input type='range' min='1' max='250' value = {rangeValue} onChange = { (e) => setRangeValue(e.target.value)}/>
                
                <ul>
                    {continents.map(continent => 
                        <li key = { continent }>
                            <input type='radio' id= {continent} value={continent} checked= {continent == selectedContinent} onChange={e => setSelectedContinent(e.target.value)}/>
                            <label htmlFor= {continent}>{continent}</label>
                        </li>
                    )}
                </ul>
            </div>

                { !(selectedContinent ==='') && 
                    <div className ='cancel'>
                        <h5  onClick= {() => setSelectedContinent('')}>Annuler la recherche</h5> 
                    </div>
                }

            <ul className = 'countries-list'>
                { data
                    .filter(country => country.region.includes(selectedContinent))
                    .sort((a, b) => b.population - a.population)
                    .filter((country, index) => index < rangeValue)
                    .map(country => 
                        <Card key={country.name} country = {country}/>)
                }
            </ul>
            
        </div>
    );
};

export default Countries;