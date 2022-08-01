import { Link } from "react-router-dom";
import React from 'react';

import "./assets/style.css";

function Schedule ({weekday, date, showtime}) {
    return (
        <>
            <p>{weekday} - {date}</p>
            <div>
                <ShowTime showtime={showtime} />
            </div>
        </>
    )
}

function ShowTime ({showtime}) {
    return (
        <>
            {showtime.map((time, index) => 
                <Link key={index} to={`/assentos/${time.id}`}>
                    <button >{time.name}</button>
                </Link>                
            )} 
        </>
    )
}

export default Schedule;