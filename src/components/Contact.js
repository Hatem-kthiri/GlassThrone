import React from "react";

const Contact = () => {
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
                    I’m always open to discussing product design work or
                    partnerships.
                </p>
                <div className="container">
                    <div className="row contact">
                        <div className="col-12 col-md-8 col-xl-8 rightside">
                            <p>
                                If you have any suggestion, project or even you
                                want to say Hello.. please fill out the form
                                below and I will reply you shortly.
                            </p>
                            <form className="contactform">
                                <div className="row">
                                    <div className="form-group col-xl-12">
                                        <i className="fa fa-user prefix" />
                                        <input
                                            id="name"
                                            name="name"
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
                                            name="email"
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
                                    <li className="facebook">
                                        {/* eslint-disable-next-line */}
                                        <a title="Facebook" href="#">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li className="twitter">
                                        {/* eslint-disable-next-line */}
                                        <a title="Twitter" href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="youtube">
                                        {/* eslint-disable-next-line */}
                                        <a title="Youtube" href="#">
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </li>
                                    <li className="dribbble">
                                        {/* eslint-disable-next-line */}
                                        <a title="Dribbble" href="#">
                                            <i className="fa fa-dribbble" />
                                        </a>
                                    </li>
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
