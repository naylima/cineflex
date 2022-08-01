import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import React from 'react';
import axios from 'axios';

import "./assets/style.css";
import loading from "./assets/loading.gif";

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
                {data.length === 0 ? (
                    <div className="main-movie"> 
                        <img src={loading} alt="" />
                    </div>                 
                ) : (
                    <div className="main-movie">
                        {data.map((value, index) => (
                            <Link key={index} to={`/sessoes/${value.id}`}>
                                <Poster posterURL={value.posterURL}/>
                            </Link>
                        ))}
                    </div>
                )}            
        </>
    )
}

export default Home;