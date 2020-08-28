import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const imageStyle = {
    maxWidth: "100%",
    maxHeight: "20vw",
    minHeight: "20vw"
}
function Portfolio() {
    // Setting the component's initial state

    return (

        <div className="row mb-2 mt-5">
            <div className="col-md-3 text-center">
                <h3 className="header">CSS</h3>
                <p><Link to="https://coreyspratlan.github.io/hw1/" target="blank"><img className="img-fluid" src="./images/Refactor.png" alt="Refactor Page" style={imageStyle} /></Link></p>
                <p><Link to="https://github.com/coreyspratlan/hw1">GitHub: SEO Refactor</Link></p>
            </div>
            <div className="col-md-3 text-center">
                <h3 className="header">Weather Dashboard</h3>
                <p><Link to="https://coreyspratlan.github.io/weather_dashboard/" target="blank"><img className="img-fluid" src="./images/weatherDashboard.png" alt="weather dashboard" style={imageStyle} /></Link></p>
                <p><Link to="https://github.com/coreyspratlan/weather_dashboard">GitHub: Weather Dashboard</Link></p>
            </div>
            <div className="col-md-3 text-center">
                <h3 className="header">MySQL</h3>
                <p><Link to="https://drive.google.com/file/d/1fEN0wc7AbYlcnaX-yh6dxEgKt5jv692t/view?usp=sharing" target="blank"><img className="img-fluid" src="./images/Employee Tracker.png" alt="employee tracker app" style={imageStyle} /></Link></p>
                <p><Link to="https://github.com/coreyspratlan/employee_tracker">GitHub: Employee Tracker</Link></p>
            </div>
            <div className="col-md-3 text-center">
                <h3 className="header">Project 1</h3>
                <p><Link to="https://coreyspratlan.github.io/Project1" target="blank"><img className="img-fluid" src="./images/Top Shelf App.png" alt="top shelf app" style={imageStyle} /></Link></p>
                <p><Link to="https://github.com/coreyspratlan/Project1">GitHub: Top Shelf App</Link></p>
            </div>
            <div className="col-md-3 text-center">
                <h3 className="header">PWA</h3>
                <p><Link to="https://coreyspratlan.github.io/reactEmployeeDirectory/" target="blank"><img className="img-fluid" src="./images/pwaBudget.png" alt="pwa budget app" style={imageStyle} /></Link></p>
                <p><Link to="https://github.com/coreyspratlan/reactEmployeeDirectory">GitHub: PWA Budget App</Link></p>
            </div>
            <div className="col-md-3 text-center">
                <h3 className="header">React</h3>
                <p><Link to="https://coreyspratlan.github.io/reactEmployeeDirectory/" target="blank"><img className="img-fluid" src="./images/reactEmployeeDirectory.png" alt="react employee directory" style={imageStyle} /></Link></p>
                <p><Link to="https://github.com/coreyspratlan/reactEmployeeDirectory">GitHub: React Employee Directory App</Link></p>
            </div>
            <div className="col-md-3 text-center">
                <h3 className="header">Project 2</h3>
                <p><Link to="https://find-my-fare.herokuapp.com/" target="blank"><img className="img-fluid" src="./images/findmyfare.png" alt="find my fare app" style={imageStyle} /></Link></p>
                <p><Link to="https://github.com/coreyspratlan/Project-2-Idea">GitHub: Find My Fare App</Link></p>

            </div>
            <div className="col-md-3 text-center">
                <h3 className="header">Project 3</h3>
                <p>Image of Project 3 here</p>
                <p>Links go here </p>
            </div>


        </div>



    );
}


export default Portfolio;