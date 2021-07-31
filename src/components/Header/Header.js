import "./Header.css";
import Typed from "react-typed"
import { Link } from "react-router-dom";
const Header = () => {
    return (  
        <div className="header-wrapper" id="main">
            <div className="main-info">
                <h1>Hello It's Bakhos Ibrahim-Rachwan </h1>
                <Typed
                    className="typed-text"
                    strings={["Front End Web Developer", "Experienced with", "HTML CSS", "JavaScript", "React JS"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />

                    <Link to="/contact" style={{textDecoration: "none"}}>
                <button className="btn">
                        Contact Me
                </button>      
                    </Link>
            </div>
        </div>
    );
}
 
export default Header;