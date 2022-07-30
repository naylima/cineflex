import { useNavigate, useLocation } from "react-router-dom";

import "./style.css"

const Success = () => {

    const { id, cpf, name, title, weekday, hour } =  useLocation().state;
    const navigate = useNavigate();
    
    return (
        <div className="succes">
            <div className="title">
                <h2>Pedido feito com sucesso!</h2>
            </div>

            <div>
                <h3>Filme e sessão</h3>
                <p>{title}</p>
                <p>{weekday} {hour}</p>
            </div>
            <div>
                <h3>Ingressos</h3>
                {id.map( item => (
                    <p>Assento {item}</p>
                ))}
            </div>
            <div>
                <h3>Comprador</h3>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </div>

            <button onClick={() => navigate("/")} >Voltar para home</button>
        </div>
    )
}

export default Success;