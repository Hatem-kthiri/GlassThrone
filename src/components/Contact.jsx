import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_wbpxiih",
                "template_oeizloz",
                form.current,
                "xbsyR_YhJ2oLp0TsM"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();

        document.querySelector(".returnmessage").style.display = "block";
        setTimeout(() => {
            document.querySelector(".returnmessage").style.display = "none";
        }, 1000);
    };
    const SocialIcon = [
        {
            title: "facebook",
            iconName: "fa fa-facebook",
            link: "https://www.facebook.com/",
        },

        {
            title: "twitter",
            iconName: "fa fa-twitter",
            link: "https://twitter.com/",
        },
        {
            title: "youtube",
            iconName: "fa fa-youtube",
            link: "https://www.youtube.com/",
        },
        {
            title: "dribble",
            iconName: "fa fa-dribbble",
            link: "https://dribbble.com/",
        },
    ];
    return (
        <section id="contact" className="">
            <div className="contact-container">
                <div className="main-title">
                    <h2>
                        Contact <span>Me</span>
                        <span className="bg-text">Contact</span>
                    </h2>
                </div>
                <p className="port-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="container">
                    <div className="row contact">
                        <div className="col-12 col-md-8 col-xl-8 rightside">
                            <p>
                                If you have any suggestion, project or even you
                                want to say Hello.. please fill out the form
                                below and I will reply you shortly.
                            </p>
                            <form
                                className="contactform"
                                ref={form}
                                onSubmit={sendEmail}
                            >
                                <div className="row">
                                    <div className="form-group col-xl-12">
                                        <i className="fa fa-user prefix" />
                                        <input
                                            id="name"
                                            name="user_name"
                                            type="text"
                                            className="form-control"
                                            placeholder="YOUR NAME"
                                            defaultValue=""
                                        />
                                    </div>
                                    <div className="form-group col-xl-12">
                                        <i className="fa fa-envelope prefix" />
                                        <input
                                            id="email"
                                            type="email"
                                            name="user_email"
                                            className="form-control"
                                            placeholder="YOUR EMAIL"
                                            defaultValue=""
                                        />
                                    </div>
                                    <div className="form-group col-xl-12">
                                        <i className="fa fa-comments prefix" />
                                        <textarea
                                            id="comment"
                                            name="message"
                                            className="form-control"
                                            placeholder="YOUR MESSAGE"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="submit-form">
                                    <button
                                        className="btn button-animated"
                                        type="submit"
                                        name="send"
                                    >
                                        <span>
                                            <i className="fa fa-send" />
                                            Send Message
                                        </span>
                                    </button>
                                </div>
                                <div className="form-message">
                                    <div
                                        className="returnmessage"
                                        style={{
                                            display: "none",
                                        }}
                                    >
                                        <span>
                                            Your message has been received, We
                                            will contact you soon.
                                        </span>
                                    </div>
                                    <span className="output_message text-center font-weight-600 uppercase" />
                                </div>
                            </form>
                        </div>

                        <div className="col-12 col-md-8 col-xl-4 leftside">
                            <div className="more-info">
                                <ul className="custom-list">
                                    <li>
                                        <h6 className="font-weight-600">
                                            <i className="fa fa-location-arrow" />{" "}
                                            <span className="contact-content">
                                                329 WASHINGTON ST BOSTON, MA
                                                02108
                                            </span>
                                        </h6>
                                    </li>
                                    <li>
                                        <h6 className="font-weight-600">
                                            <i className="fa fa-whatsapp" />
                                            <span className="contact-content">
                                                (617) 557-0089
                                            </span>
                                        </h6>
                                    </li>
                                    <li>
                                        <h6 className="font-weight-600">
                                            <i className="fa fa-envelope-o " />
                                            <span className="contact-content">
                                                contact@example.com
                                            </span>
                                        </h6>
                                    </li>
                                </ul>
                            </div>
                            <div className="social">
                                <ul className="list-inline social social-intro text-center p-none">
                                    {SocialIcon.map((social, i) => (
                                        <li key={i}>
                                            {/* eslint-disable-next-line */}
                                            <a
                                                href={social.link}
                                                title={social.title}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <i
                                                    className={social.iconName}
                                                ></i>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
