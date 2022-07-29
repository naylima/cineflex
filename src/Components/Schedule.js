import { Link } from "react-router-dom";
import React from 'react';

function Schedule ({weekday, date, showtime}) {
    return (
        <>
            <p>{weekday} - {date}</p>
            <div className="time">
                <ShowTime showtime={showtime} />
            </div>
        </>
    )
}

function ShowTime ({showtime}) {
    return (
        <>
            {showtime.map((time) => 
                <Link to={`/assentos/${time.id}`}>
                    <button key={time.id}>{time.name}</button>
                </Link>                
            )} 
        </>
    )
}

export default Schedule;