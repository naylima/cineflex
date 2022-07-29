import { useNavigate } from "react-router-dom";
import {IoIosArrowDropleft} from "react-icons/io";

function Header () {
    
    const navigate = useNavigate();

    return (       
        <div id="header">            
            CINEFLEX
            {window.location.pathname === "/" ? "" : 
                <IoIosArrowDropleft id="icon" onClick={() => navigate(-1)}/>}            
        </div>   
    )
}

export default Header;