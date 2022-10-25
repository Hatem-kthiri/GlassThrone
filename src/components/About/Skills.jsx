import React from "react";

const Skills = () => {
    const skills = [
        { skillPercent: "95", skillName: "HTML" },
        { skillPercent: "75", skillName: "JAVASCRIPT" },
        { skillPercent: "75", skillName: "CSS" },
        { skillPercent: "75", skillName: "REACT JS" },
        { skillPercent: "95", skillName: "VUE JS" },
        { skillPercent: "90", skillName: "ANGULAR JS" },
        { skillPercent: "85", skillName: "PHOTOSHOP" },
        { skillPercent: "75", skillName: "ADOBE XD" },
        { skillPercent: "80", skillName: "ILLUSTRATOR" },
    ];
    return (
        <div className="row">
            <div className="col-12">
                <h2 className="font-weight-700 uppercase title-section skills-title">
                    Skills
                </h2>
            </div>
            {skills.map((skill) => {
                return (
                    <div className="col-12 col-sm-6 col-md-4">
                        <span className="skill-text">{skill.skillName}</span>
                        <div className="chart-bar">
                            <span
                                className="item-progress"
                                data-percent={skill.skillPercent}
                                style={{
                                    width: `${skill.skillPercent}%`,
                                }}
                            />
                            <span
                                className="percent"
                                style={{
                                    right: `calc(${
                                        100 - skill.skillPercent
                                    }% - 21px)`,
                                }}
                            >
                                {skill.skillPercent}%
                                <b className="arrow" />
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Skills;
