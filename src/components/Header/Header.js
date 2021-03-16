import "./Header.css";
import Typed from "react-typed"
import { Link } from "react-scroll";
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

                <a href="#!" className="btn-main">
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
                        Contact Me
                    </Link>
                </a>      
            </div>
        </div>
    );
}
 
export default Header;