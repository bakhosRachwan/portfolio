import "./Navbar.css";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <div className="nav-link">
                                <Link to="/" style={{textDecoration: "none"}}>
                                    Home
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/about" style={{textDecoration: "none"}}>
                                    About Me
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/projects" style={{textDecoration: "none"}}>
                                    Projects
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/skills" style={{textDecoration: "none"}}>
                                    Skills
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/contact" style={{textDecoration: "none"}}>
                                    Contact Me
                                </Link>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;