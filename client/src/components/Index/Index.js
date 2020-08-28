import React from "react";
import "./style.css";

function Index() {
    // Setting the component's initial state

    return (

        <div className="aboutmecontainer mb-2 mt-5">

            <div className="row">
                <div className="col-md-4">
                    <img src="./images/picture of me 1.png" alt="Corey Spratlan" style={{ width: "100%" }} />
                </div>



                <div className="col-md-4">
                    <div className="border-dark mb-3" style={{ maxWidth: "35rem" }}>
                        <div className="card-header header bg-dark text-light text-center" style={{ text: "light" }}><b>About Me</b></div>
                        <div className="card-body text-dark aboutmecard">
                            <p>A native to Austin, Corey began his coding studies through the UT Coding Bootcamp Full-Stack Develpment full-time program in June, 2020.
                            Corey was an orchestra teacher for the Round Rock Indepdendent School District as well as a conductor for the Austin Youth Orchestra,
                            a principal violinist for the Waco Symphony Orchestra, and a private violin teacher before he began his coding journey.

                </p>
                            <p>Upon graduation from the UT Coding Bootcamp, Corey will continue studying computer programming languages as he prepares to apply for
                            jobs in web delvelopment.
                </p>
                        </div>
                    </div>
                </div>



                <div className="col-md-4">
                    <div className="border-dark mb-3" style={{ maxWidth: "35rem" }}>
                        <div className="card-header header bg-dark text-light text-center"><b>Education / Experience</b></div>
                        <div className="card-body text-dark aboutmecard">
                            <h3 className="mb-2"> Education </h3>

                            <ul className="mb-2">
                                <li>Baylor University: Bachelor of Music Education</li>
                                <li>University of Texas at Austin: Master of Music</li>
                                <li>UT Coding Bootcamp Full-Stack Web Development</li>
                            </ul>
                            <h3 className="mb-2"> Work Experience </h3>

                            <ul>
                                <li>Waco Symphony - section violin, principal</li>
                                <li>Central Texas String Academy, violin instructor</li>
                                <li>Trinity Episcopal School, orchestra director</li>
                                <li>Ridgeview Middle School, orchestra director</li>
                                <li>Austin Youth Orchestra, conductor</li>
                                <li>Clinician: Texas Music Educators Association All-Region conductor for Region 18 and Region 12</li>
                                <li>Clinician: Texas Orchestra Directors Association conductor</li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    );
}


export default Index;