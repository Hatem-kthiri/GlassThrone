import React from "react";
import Typed from "react-typed";
import darkImage from "../Assets/img/darkscreen.jpg";
const HomeInterface = () => {
    const HomeContent = {
        homeImage: darkImage,
        homeName: "steve milner",
        homeTypedStrings: [
            "Virginia Burge",
            "Web Design",
            "UI/UX Design",
            "Web Development",
            "YouTuber",
            "Blogger",
            "Freelancer",
        ],
        homeDescriptions: `With over 5+ years of job experience. I studied
                        Information Technology at University and later honed my
                        skills through commercial and freelance experience. My
                        skills include PHP, Laravel, jQuery, database design,
                        JavaScript and MySQL.`,
    };
    return (
        <section
            id="home"
            className="active"
            style={{ backgroundImage: `url(${HomeContent.homeImage})` }}
        >
            <div className="main-text-container">
                <div className="main-text" id="selector">
                    <h3>Hello There !</h3>
                    <h1 className="ah-headline d-flex">
                        I'm{/* */}
                        <div className="headline-strings">
                            {" "}
                            <Typed
                                strings={HomeContent.homeTypedStrings}
                                typeSpeed={80}
                                backSpeed={90}
                                loop
                            />
                        </div>
                    </h1>
                    <p>{HomeContent.homeDescriptions}</p>

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
                            <i className="fa fa-envelope-o" />
                            CONTACT ME
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeInterface;
