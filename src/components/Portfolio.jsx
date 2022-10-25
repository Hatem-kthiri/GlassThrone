import React from "react";
const Portfolio = () => {
    // eslint-disable-next-line
    const portfolioItem = [
        {
            projectName: "Project Source",
            image: "port1.jpg",
            githubLink: "#",
            dribbleLink: "#",
            behanceLink: "#",
            youtubeLink: "#",
        },
        {
            projectName: "Project Source",
            image: "port2.jpg",
            githubLink: "#",
            dribbleLink: "#",
            behanceLink: "#",
            youtubeLink: "#",
        },
        {
            projectName: "Project Source",
            image: "port3.jpg",
            githubLink: "#",
            dribbleLink: "#",
            behanceLink: "#",
            youtubeLink: "#",
        },
        {
            projectName: "Project Source",
            image: "port4.jpg",
            githubLink: "#",
            dribbleLink: "#",
            behanceLink: "#",
            youtubeLink: "#",
        },
        {
            projectName: "Project Source",
            image: "port5.jpg",
            githubLink: "#",
            dribbleLink: "#",
            behanceLink: "#",
            youtubeLink: "#",
        },
        {
            projectName: "Project Source",
            image: "port6.jpg",
            githubLink: "#",
            dribbleLink: "#",
            behanceLink: "#",
            youtubeLink: "#",
        },
        {
            projectName: "Project Source",
            image: "port7.jpg",
            githubLink: "#",
            dribbleLink: "#",
            behanceLink: "#",
            youtubeLink: "#",
        },
    ];
    return (
        <section className="" id="portfolio">
            <div className="container">
                <div className="main-title">
                    <h2>
                        My <span>Portfolio</span>
                        <span className="bg-text">My Work</span>
                    </h2>
                </div>
                <p className="port-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="portfolios">
                    {portfolioItem.map((item, i) => {
                        return (
                            <div className="portfolio-item" key={i}>
                                <div className="image">
                                    <img
                                        src={require(`../Assets/img/projects/${item.image}`)}
                                        alt=""
                                    />
                                </div>
                                <div className="hover-items">
                                    <h3>{item.projectName}</h3>
                                    <div className="icons">
                                        <a
                                            href={item.githubLink}
                                            className="icon"
                                        >
                                            <i className="fa fa-github" />
                                        </a>
                                        <a
                                            href={item.dribbleLink}
                                            className="icon"
                                        >
                                            <i className="fa fa-dribbble" />
                                        </a>
                                        <a
                                            href={item.behanceLink}
                                            className="icon"
                                        >
                                            <i className="fa fa-behance" />
                                        </a>
                                        <a
                                            href={item.youtubeLink}
                                            className="icon"
                                        >
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
