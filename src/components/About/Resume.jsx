import React from "react";
const Resume = () => {
    const Experiences = [
        {
            timelineYr: "2020",
            timelineInfo: "Project Manager",
            timelineInfoSmall: "Best Studio",
            timelineInfoDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facere odio nemo asperiores veniam vitae dolores itaque quas? Nihil quae aspernatur minus obcaecati amet tempore ratione ea exercitationem, sit atque?",
        },
        {
            timelineYr: "2018",
            timelineInfo: "UX Designer",
            timelineInfoSmall: "Digital Ace",
            timelineInfoDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facere odio nemo asperiores veniam vitae dolores itaque quas? Nihil quae aspernatur minus obcaecati amet tempore ratione ea exercitationem, sit atque?",
        },
        {
            timelineYr: "2016",
            timelineInfo: "UI Freelancer",
            timelineInfoSmall: "",
            timelineInfoDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facere odio nemo asperiores veniam vitae dolores itaque quas? Nihil quae aspernatur minus obcaecati amet tempore ratione ea exercitationem, sit atque?",
        },
        {
            timelineYr: "2014",
            timelineInfo: "Junior Designer",
            timelineInfoSmall: "Crafted Co.",
            timelineInfoDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facere odio nemo asperiores veniam vitae dolores itaque quas? Nihil quae aspernatur minus obcaecati amet tempore ratione ea exercitationem, sit atque?",
        },
    ];
    const Educations = [
        {
            timelineYr: "2017",
            timelineInfo: "Mobile Web",
            timelineInfoSmall: "Master Design",
            timelineInfoDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facere odio nemo asperiores veniam vitae dolores itaque quas? Nihil quae aspernatur minus obcaecati amet tempore ratione ea exercitationem, sit atque?",
        },
        {
            timelineYr: "2015",
            timelineInfo: "User Interfaces",
            timelineInfoSmall: "Creative Agency",
            timelineInfoDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facere odio nemo asperiores veniam vitae dolores itaque quas? Nihil quae aspernatur minus obcaecati amet tempore ratione ea exercitationem, sit atque?",
        },
        {
            timelineYr: "2013",
            timelineInfo: "Artwork Design",
            timelineInfoSmall: "New Art School",
            timelineInfoDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facere odio nemo asperiores veniam vitae dolores itaque quas? Nihil quae aspernatur minus obcaecati amet tempore ratione ea exercitationem, sit atque?",
        },
    ];
    return (
        <section
            className="resume py-5 d-lg-flex justify-content-center align-items-center"
            id="resume"
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <h2 className="mb-4 resume-title">Experiences</h2>
                        <div className="timeline">
                            {Experiences.map((experience) => {
                                return (
                                    <div className="timeline-wrapper">
                                        <div className="timeline-yr">
                                            <span>{experience.timelineYr}</span>
                                        </div>
                                        <div className="timeline-info">
                                            <h3>
                                                <span>
                                                    {experience.timelineInfo}
                                                </span>
                                                <small>
                                                    {
                                                        experience.timelineInfoSmall
                                                    }
                                                </small>
                                            </h3>
                                            <p>
                                                {
                                                    experience.timelineInfoDescription
                                                }
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <h2 className="mb-4 resume-title mobile-mt-2">
                            Educations
                        </h2>
                        <div className="timeline">
                            {Educations.map((Education) => {
                                return (
                                    <div className="timeline-wrapper">
                                        <div className="timeline-yr">
                                            <span>{Education.timelineYr}</span>
                                        </div>
                                        <div className="timeline-info">
                                            <h3>
                                                <span>
                                                    {Education.timelineInfo}
                                                </span>
                                                <small>
                                                    {
                                                        Education.timelineInfoSmall
                                                    }
                                                </small>
                                            </h3>
                                            <p>
                                                {
                                                    Education.timelineInfoDescription
                                                }
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
