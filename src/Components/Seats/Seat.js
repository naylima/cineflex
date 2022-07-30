import { useState} from 'react';

import "./assets/style.css";

function Seat ({ id, name, isAvailable , event , removeEvent}) {  
    
    const [status, setStatus] = useState("available");

    return (
        <>
            { isAvailable ? (
                <> 
                    {status === "available" ? (
                         <div 
                            className={`seat ${status}`} 
                            onClick= {() => {
                                setStatus("selected")
                                event(id)
                            }}
                        >
                            {name}
                        </div>
                    ): (
                        <div 
                            className={`seat ${status}`} 
                            onClick= {() => {
                                setStatus("available")
                                removeEvent(id)
                            }}
                        >
                            {name}
                        </div>
                    )}
                </>                   
              
            ) : (

                <div 
                    className={"seat unavailable"} 
                    onClick= {() => alert("Esse assento não está disponível!")}
                >
                    {name}
                </div>
            )}            
        </>       
    )
}

export default Seat;