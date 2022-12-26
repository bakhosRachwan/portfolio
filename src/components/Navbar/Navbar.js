import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const menuRef = useRef();

  useEffect(() => {
    let Handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        // setIsClosed(false);
      }
    };

    document.addEventListener("mousedown", Handler);

    return () => {
      document.removeEventListener("mousedown", Handler);
    };
  });
  return (
    <>
      <a
        class="close-navbar-toggler collapsed"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        href="d"
      ></a>
      <nav
        className="navbar navbar-expand-lg sticky-top navbar-light bg-light"
        ref={menuRef}
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <div className="nav-link">
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "#111",
                      fontWeight: "700",
                    }}
                  >
                    Home
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <Link
                    to="/experience"
                    style={{
                      textDecoration: "none",
                      color: "#111",
                      fontWeight: "700",
                    }}
                  >
                    Experience
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <Link
                    to="/skills"
                    style={{
                      textDecoration: "none",
                      color: "#111",
                      fontWeight: "700",
                    }}
                  >
                    Software
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <Link
                    to="/projects"
                    style={{
                      textDecoration: "none",
                      color: "#111",
                      fontWeight: "700",
                    }}
                  >
                    Projects
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <Link
                    to="/about"
                    style={{
                      textDecoration: "none",
                      color: "#111",
                      fontWeight: "700",
                    }}
                  >
                    About Me
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <Link
                    to="/contact"
                    style={{
                      textDecoration: "none",
                      color: "#111",
                      fontWeight: "700",
                    }}
                  >
                    Contact Me
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
