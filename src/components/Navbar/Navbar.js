import "./Navbar.css";
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-dark ">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                <Link activeClass="active" to="main" spy={true} smooth={true} offset={-70} duration={500}>
                                    Home <span className="sr-only">(current)</span>
                                </Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
                                    About Me
                                </Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>
                                    Projects
                                </Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
                                    Contact Me
                                </Link>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;