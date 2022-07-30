import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home";
import Session from "./Components/Session/Session";
import Seats from "./Components/Seats/Seats";
import Success from "./Components/Success/Success";

function App () {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sessoes/:idFilme" element={<Session />}/>
                <Route path="/assentos/:idSessao" element={<Seats />}/>
                <Route path="/sucesso" element={<Success />}/>
			</Routes>
        </BrowserRouter>
    );
}

export default App;