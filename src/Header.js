import "./Header.css";
import Typed from "react-typed"

const Header = () => {
    return (  
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hello It's Bakhos Ibrahim-Rachwan </h1>
                <Typed
                    className="typed-text"
                    strings={["Front End Web Developer", "Experienced with", "HTML CSS", "JavaScrpit", "React JS"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />

                <a href="#" className="btn-main">Contact Me</a>      
            </div>
        </div>
    );
}
 
export default Header;