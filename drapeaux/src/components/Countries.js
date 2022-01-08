import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {

    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(40);
    const [sortData, setSortData] = useState([]);
    const [selectedContinent, setSelectedContinent] = useState('');

    const continents = ["Africa", "America", "Asia", "Europe", "Oceania"]

useEffect(()=> {
    axios
    .get( "https://restcountries.com/v2/all?fields=name,population,region,capital,flag")
    .then(res => setData(res.data))

    const sortData = data.sort((a,b)=>{
        return (b.population - a.population)
    })
    sortData.length = rangeValue;
    setSortData(sortData)
   
},[data])


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
                { sortData
                    .filter(country => country.region.includes(selectedContinent))
                    .map(country => 
                        <Card key={country.name} country = {country}/>)
                }
            </ul>
            
        </div>
    );
};

export default Countries;