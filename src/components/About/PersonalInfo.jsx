import React from "react";
import MyImage from "../../Assets/img/women.png";

const PersonalInfo = () => {
    const PersonalContent1 = [
        { meta: "First Name", metaInfo: "Virginia" },
        { meta: "Last Name", metaInfo: "Burge" },
        { meta: "Birthdate", metaInfo: "12 Nov 1993" },
        { meta: "Nationality", metaInfo: "Americain" },
        { meta: "Experience", metaInfo: " 5 years" },
        { meta: "Address", metaInfo: "Steuben" },
    ];
    const PersonalContent2 = [
        { meta: "Freelance", metaInfo: "Available" },
        { meta: "Language", metaInfo: "English" },
        { meta: "Phone", metaInfo: "+01 608-476-7128" },
        { meta: "Email", metaInfo: "youremail@mail.com" },
        { meta: "Skype", metaInfo: "Virginia.Burge" },
        { meta: "Dribbble", metaInfo: "Virginia.dribbble" },
    ];

    return (
        <div className="container infos">
            <div className="row personal-info">
                <div className="img-mobile">
                    <div className="image-container">
                        <img
                            className="img-fluid d-block"
                            style={{ transform: "scale(1.5)" }}
                            src={MyImage}
                            alt=""
                        />
                    </div>
                </div>
                <div className="row col-xl-6 col-lg-6 col-md-12">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <ul className="list-1">
                            {PersonalContent1.map((list, i) => {
                                return (
                                    <li key={i}>
                                        <h6>
                                            <span className="font-weight-700">
                                                {list.meta}:
                                            </span>
                                            {list.metaInfo}
                                        </h6>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div>
                        <ul className="list-2">
                            {PersonalContent2.map((list, i) => {
                                return (
                                    <li key={i}>
                                        <h6>
                                            <span className="font-weight-700">
                                                {list.meta} :
                                            </span>
                                            {list.metaInfo}
                                        </h6>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
