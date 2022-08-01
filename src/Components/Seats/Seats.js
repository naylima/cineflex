import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import React from 'react';
import axios from 'axios';

import "./assets/style.css";
import loading from "./assets/loading.gif"

import Seat from "./Seat";
import Footer from '../Footer/Footer';

function Seats () {   

    const params = useParams();
    const navigate = useNavigate();

    const [seats, setSeats] = useState([]); 
    const [movie, setMovie] = useState ([]);
    const [day, setDay] = useState([])
    const [data, setData] = useState([]);
    const [id, SetId] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] =useState ("");

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`);

        promise.then((response) => {
            setSeats(response.data.seats);
            setMovie(response.data.movie);
            setDay(response.data.day);
            setData(response.data);
        });    
    }, [params.idSessao]);

    function selectedSeats (selectedid) {
        SetId([...id, selectedid]);
    }

    function removeSeats (selectedid) {
        const remove = id.filter(id => id !== selectedid)
        SetId(remove)
    }    

    function bookSeats (e) {
        e.preventDefault();

        if(id.length === 0) {
            
            alert ("Por favor, escolha um assento!");

        } else {

            const promise = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
                ids: id,
                name:name,
                cpf: cpf,
            })
    
            promise.then(() => {
                navigate("/sucesso", 
                    {state: {
                        id: id,
                        cpf: cpf, 
                        name: name, 
                        title: movie.title,
                        weekday: day.weekday,
                        hour: data.name,
                    }});
            })            
        }       
    }

    return (
        <>  
            <div className="session">
                <div className="title">
                    <h2>Selecione o(s) assento(s)</h2>
                </div>

                {data.length === 0 ? (
                    <div className="seats"> 
                        <img src={loading} alt="" />
                    </div>                 
                ) : (
                    <div className="seats">
                        {seats.map((seat) => 
                            <Seat 
                                key={seat.id}
                                id={seat.id}
                                name={seat.name} 
                                isAvailable={seat.isAvailable}
                                event = {selectedSeats}
                                removeEvent = {removeSeats}
                            />
                        )}
                    </div>
                )}

                <div className="seats">
                    <div>
                        <div className="caption selected"></div>
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <div className="caption available"></div>
                        <p>Disponível</p>
                    </div>
                    <div>
                        <div className="caption unavailable"></div>
                        <p>Indisponível</p>
                    </div>
                </div>

                <form className="user-info" onSubmit={bookSeats}>                    
                    <label>Nome do comprador:</label>
                    <input 
                        type="name" 
                        value={name} 
                        placeholder="Digite seu nome..."
                        onChange={e => setName(e.target.value)}
                        required
                        >
                    </input>
                    <label>CPF do comprador:</label>
                    <input 
                        value={cpf}
                        pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                        placeholder="Digite seu CPF..."
                        onChange={e => setCpf(e.target.value)}
                        required
                        >
                    </input>

                    <button type="submit">
                        Reservar assento(s)
                    </button>
                    
                </form> 

            </div>

            <Footer 
                posterURL={movie.posterURL} 
                title={movie.title} 
                name={data.name} 
                weekday={day.weekday}
            />
        </>
    )
}

export default Seats;