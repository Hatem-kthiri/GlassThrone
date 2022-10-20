import React from "react";
import Resume from "./Resume";

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
            <div className="container infos">
                <div className="row personal-info">
                    <div className="img-mobile">
                        <div className="image-container">
                            <img
                                className="img-fluid d-block"
                                style={{ transform: "scale(1.5)" }}
                                src={require("../Assets/img/women.png")}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="row col-xl-6 col-lg-6 col-md-12">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <ul className="list-1">
                                <li>
                                    <h6>
                                        <span className="font-weight-700">
                                            First Name :
                                        </span>
                                        Virginia
                                    </h6>
                                </li>
                                <li>
                                    <h6>
                                        <span className="font-weight-700">
                                            Last Name :
                                        </span>
                                        Burge
                                    </h6>
                                </li>
                                <li>
                                    <h6>
                                        <span className="font-weight-700">
                                            Birthdate :
                                        </span>
                                        12 Nov 1993
                                    </h6>
                                </li>
                                <li>
                                    <h6>
                                        <span className="font-weight-700">
                                            Nationality :
                                        </span>
                                        Americain
                                    </h6>
                                </li>
                                <li>
                                    <h6>
                                        <span className="font-weight-700">
                                            Experience :
                                        </span>
                                        5 years
                                    </h6>
                                </li>
                                <li>
                                    <h6>
                                        <span className="font-weight-700">
                                            Address :
                                        </span>
                                        Steuben
                                    </h6>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="list-2">
                                <li>
                                    <h6>
                                        <span className="font-weight-700">
                                            Freelance :
                                        </span>
                                        Available
                                    </h6>
                                </li>
                                <li>
                                    <h6>
                                        <span className="font-weight-700">
                                            Language :
                                        </span>
                                        English
                                    </h6>
                                </li>
                                <li>
                                    <h6>
                                        <span className="font-weight-700">
                                            Phone :
                                        </span>
                                        +01 608-476-7128
                                    </h6>
                                </li>
                                <li>
                                    <h6>
                                        <span className="font-weight-700">
                                            Email :
                                        </span>
                                        youremail@mail.com
                                    </h6>
                                </li>
                                <li>
                                    <h6>
                                        <span className="font-weight-700">
                                            Skype :
                                        </span>
                                        Virginia.Burge
                                    </h6>
                                </li>
                                <li>
                                    <h6>
                                        <span className="font-weight-700">
                                            Dribbble :
                                        </span>
                                        Virginia.dribbble
                                    </h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container col-12 mx-auto text-center">
                <hr className="about-section" />
            </div>
            <div className="resume-container">
                <div className="container">
                    <Resume />
                    <div className="row">
                        <div className="col-12">
                            <h2 className="font-weight-700 uppercase title-section skills-title">
                                skills
                            </h2>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <span className="skill-text">HTML</span>
                            <div className="chart-bar">
                                <span
                                    className="item-progress"
                                    data-percent={95}
                                    style={{ width: "95%" }}
                                />
                                <span
                                    className="percent"
                                    style={{
                                        right: "calc(5% - 21px)",
                                    }}
                                >
                                    95%
                                    <b className="arrow" />
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <span className="skill-text">javascript</span>
                            <div className="chart-bar">
                                <span
                                    className="item-progress"
                                    data-percent={75}
                                    style={{ width: "75%" }}
                                />
                                <span
                                    className="percent"
                                    style={{
                                        right: "calc(25% - 21px)",
                                    }}
                                >
                                    75%
                                    <b className="arrow" />
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <span className="skill-text">css</span>
                            <div className="chart-bar">
                                <span
                                    className="item-progress"
                                    data-percent={75}
                                    style={{ width: "75%" }}
                                />
                                <span
                                    className="percent"
                                    style={{
                                        right: "calc(25% - 21px)",
                                    }}
                                >
                                    75%
                                    <b className="arrow" />
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <span className="skill-text">React Js</span>
                            <div className="chart-bar">
                                <span
                                    className="item-progress"
                                    data-percent={75}
                                    style={{ width: "75%" }}
                                />
                                <span
                                    className="percent"
                                    style={{
                                        right: "calc(25% - 21px)",
                                    }}
                                >
                                    75%
                                    <b className="arrow" />
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <span className="skill-text">Vue Js</span>
                            <div className="chart-bar">
                                <span
                                    className="item-progress"
                                    data-percent={90}
                                    style={{ width: "90%" }}
                                />
                                <span
                                    className="percent"
                                    style={{
                                        right: "calc(10% - 21px)",
                                    }}
                                >
                                    90%
                                    <b className="arrow" />
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <span className="skill-text">angular js</span>
                            <div className="chart-bar">
                                <span
                                    className="item-progress"
                                    data-percent={85}
                                    style={{ width: "85%" }}
                                />
                                <span
                                    className="percent"
                                    style={{
                                        right: "calc(15% - 21px)",
                                    }}
                                >
                                    85%
                                    <b className="arrow" />
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <span className="skill-text">photoshop</span>
                            <div className="chart-bar">
                                <span
                                    className="item-progress"
                                    data-percent={70}
                                    style={{ width: "70%" }}
                                />
                                <span
                                    className="percent"
                                    style={{
                                        right: "calc(30% - 21px)",
                                    }}
                                >
                                    70%
                                    <b className="arrow" />
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <span className="skill-text">Adobe XD</span>
                            <div className="chart-bar">
                                <span
                                    className="item-progress"
                                    data-percent={75}
                                    style={{ width: "75%" }}
                                />
                                <span
                                    className="percent"
                                    style={{
                                        right: "calc(25% - 21px)",
                                    }}
                                >
                                    75%
                                    <b className="arrow" />
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <span className="skill-text">illustrator</span>
                            <div className="chart-bar">
                                <span
                                    className="item-progress"
                                    data-percent={80}
                                    style={{ width: "80%" }}
                                />
                                <span
                                    className="percent"
                                    style={{
                                        right: "calc(20% - 21px)",
                                    }}
                                >
                                    80%
                                    <b className="arrow" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
