import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import React from 'react';
import axios from 'axios';

import Poster from './Poster';

function Home () {

    const [data, SetData] = useState([]);    

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

        promise.then((response) => {
            SetData(response.data);
        });    
    }, []);

    return (
        <>
            <div className="title">
                <h2>Selecione o filme</h2>
            </div>
            <div className="main-movie">            
                {data.map((value) => (
                    <Link to={`/sessoes/${value.id}`}>
                        <Poster key={value.id} posterURL={value.posterURL}/>
                    </Link>
                ))}            
            </div>
        </>
    )
}

export default Home;