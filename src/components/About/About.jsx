import React from "react";
import PersonalInfo from "./PersonalInfo";
import Resume from "./Resume";
import Skills from "./Skills";

const About = () => {
    return (
        <section id="about" className="">
            <div className="main-title">
                <h2>
                    About <span>Me</span>
                    <span className="bg-text">My stats</span>
                </h2>
            </div>
            <p className="port-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* Personal Info Component Start */}
            <PersonalInfo />
            {/* Personal Info Component End */}
            <div className="container col-12 mx-auto text-center">
                <hr className="about-section" />
            </div>
            <div className="resume-container">
                <div className="container">
                    {/* Resume Start */}
                    <Resume />
                    {/* Resume End */}

                    {/* Skills Start */}
                    <Skills />
                    {/* Skills End */}
                </div>
            </div>
        </section>
    );
};

export default About;
