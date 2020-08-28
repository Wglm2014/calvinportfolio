import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function Navbar() {
    // Setting the component's initial state



    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/"><b>About Me</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/Portfolio"><b>Portfolio</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/Contact"><b>Contact</b></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}


export default Navbar;