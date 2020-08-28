import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
// import SocialBadge from "react-social-badge";


function Contact() {
    // Setting the component's initial state
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
        document.body.appendChild(script);
    }, [])

    return (



        <div className="contaier">
            <div className="row justify-content-center mt-2">
                <div col-md-12>

                    <div className="contactcard border-secondary mt-5">
                        <div className="card-header header">Make A Connection</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control" id="name" name="name"
                                        placeholder="Ex: John Doe" />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="text" className="form-control" id="email" name="email"
                                        placeholder="example@example.com" />

                                    <div className="form-group">
                                        <label for="message">Message</label>
                                        <textarea className="form-control" id="message" name="message" rows="3"></textarea>
                                    </div>
                                </div>
                            </form>
                            <button type="button" className="btn btn-secondary">Submit</button>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-4">
                            <div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal"
                                data-theme="dark" data-vanity="corey-spratlan-3849731a5" >
                                <a class="LI-simple-link" href='https://www.linkedin.com/in/corey-spratlan-3849731a5?trk=profile-badge'>
                                    Corey Spratlan</a>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <a href="https://github.com/coreyspratlan" target="blank"><img src="./images/GitHub.png"
                                alt="Link to GitHub" style={{ "width": "400px", "height": "215px" }} /></a>

                        </div>
                        <div className="col-md-1"></div>

                        <div className="col-md-2 border border-dark text-center">
                            <a href="https://docs.google.com/document/d/1jZTrAXM4a5l1_v8RaGYg8O4gNSl2jzXw-1HrByqTCiU/edit?usp=sharing" target="blank"><img src="./images/Resume.png"
                                alt="Link to Resume" style={{ "width": "200px", "height": "215px" }} /></a>

                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
}


export default Contact;