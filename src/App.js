import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Session from "./Components/Session";
import Seats from "./Components/Seats";
import Succes from "./Components/Succes";

function App () {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sessoes/:idFilme" element={<Session />}/>
                <Route path="/assentos/:idSessao" element={<Seats />}/>
                <Route path="/sucesso" element={<Succes />}/>
			</Routes>
        </BrowserRouter>
    );
}

export default App;