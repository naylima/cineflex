function Footer ({ posterURL , title, weekday , name }) {
    return (
        <footer>
            <div>
                <img src={posterURL} alt=""/>
            </div>
            <div>
                <p>{title}</p>
                <p> {weekday}  {name}</p>
            </div>
        </footer>
    );
}

export default Footer;