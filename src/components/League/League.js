import React from 'react';
import { useState, useEffect } from 'react';
import AllLeague from '../AllLeague/AllLeague';
import Header from '../Header/Header';
import './League.css'


const League = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
       fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
       .then(response => response.json())
       .then(data => setLeagues(data.leagues))
    }, [])

    return (
        <div>
        <Header/>
        <div className="container">
            <div className="row my-5">
              {
                  leagues.map((league) => 
                    <AllLeague
                       league={league}
                       key={league.idLeague} 
                    />
                  ).slice(0, 15)
              }
            </div>
        </div>
           
        </div>
    );
};

export default League;