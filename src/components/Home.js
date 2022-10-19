import React from "react";
import Typed from "react-typed";
import "./style.css";
const Home = () => {
    return (
        <section id="home" className="active">
            <div className="main-text-container">
                <div className="main-text" id="selector">
                    <h3>Hi there !</h3>
                    <h1 className="ah-headline d-flex">
                        I'm{/* */}
                        <div className="headline-strings">
                            {" "}
                            <Typed
                                strings={[
                                    "Virginia Burge",
                                    "Web Design",
                                    "UI/UX Design",
                                    "Web Development",
                                    "YouTuber",
                                    "Blogger",
                                    "Freelancer",
                                ]}
                                typeSpeed={80}
                                backSpeed={90}
                                loop
                            />
                        </div>
                    </h1>
                    <p>
                        With over 5+ years of job experience. I studied
                        Information Technology at University and later honed my
                        skills through commercial and freelance experience. My
                        skills include PHP, Laravel, jQuery, database design,
                        JavaScript and MySQL.
                    </p>

                    <div className="custom-btn-group mt-4">
                        {/* eslint-disable-next-line */}
                        <a href="#" className="btn mr-lg-2 custom-btn">
                            <i className="fa fa-suitcase" /> Download Resume
                        </a>{" "}
                        {/* eslint-disable-next-line */}
                        <a
                            href="#"
                            className="btn custom-btn custom-btn-bg custom-btn-link"
                        >
                            Get a free quote
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
