import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

import Footer from "./Footer";
import Schedule from "./Schedule";    

function Session () {

    const params = useParams();

    const [days, setDays] = useState([]);
    const [data, setData] = useState ({});   

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idFilme}/showtimes`);

        promise.then((response) => {
            setDays(response.data.days);
            setData(response.data);
        });    
    }, []);

    return (
        <>
            <div className="title">
                <h2>Selecione o horário</h2>
            </div>
            <div className="main-schedules">
                {days.map((day) => 
                    <Schedule 
                        key={day.id} 
                        weekday={day.weekday} 
                        date={day.date}
                        showtime={day.showtimes}/>
                )} 
            </div>
            <Footer posterURL={data.posterURL} title={data.title}/>
        </>
    )
}

export default Session;