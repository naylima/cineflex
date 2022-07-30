import "./assets/style.css";

function Poster ({posterURL}) {
    return (        
        <div className="movie-card">
            <div className="image">
                <img src={posterURL} alt=""/>  
            </div>           
        </div>        
    )
}

export default Poster;