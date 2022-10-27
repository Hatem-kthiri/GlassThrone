import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import previewDark from "../Assets/img/preview-dark.jpg";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
const previewDemo = [
    {
        img: previewDark,
        title: "GlassThrone Dark-Portfolio",
        routerPath: "/home",
        delayAnimation: "50",
    },
];

const Preview = () => {
    // Aos For animation
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    return (
        <div>
            <section className="banner text-center">
                <div className="content">
                    <h1>GlassThrone Portfolio</h1>
                    <h2>Portfolio React Template</h2>
                </div>
            </section>
            {/* End .banner */}

            <section className="demo dark">
                <div className="container">
                    <div className="row">
                        {previewDemo.map((preview, i) => (
                            <div
                                className="col-xs-12 col-sm-6 col-md-6"
                                key={i}
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay={preview.delayAnimation}
                            >
                                <div className="content text-center">
                                    <div className="bg_container">
                                        <Link
                                            to={preview.routerPath}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src={preview.img}
                                                alt="demo"
                                                className="img-responsive"
                                            />
                                        </Link>
                                    </div>
                                    <h2 className="demo-title">
                                        {preview.title}
                                    </h2>
                                    <div className="anchor">
                                        <h6>
                                            <Link
                                                className="btn"
                                                to={preview.routerPath}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                view demo
                                            </Link>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* End .Demo */}

            <footer>
                <div className="go_purchase">
                    <h6 data-aos="fade-up" data-aos-duration="1200">
                        You are at the right step now
                    </h6>
                    <h3
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                    >
                        Purchase GlassThrone & Build Your Super Fast{" "}
                        <span className="theme-color">React JS</span> &amp;{" "}
                        <span className="theme-color">Bootstrap 5 </span> Based
                        Portfolio Template.
                    </h3>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                    >
                        <a
                            className="purchase_button"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="button-text">Purchase Now</span>
                            <span className="button-icon fa fa-arrow-right"></span>
                        </a>
                    </div>
                </div>
                {/* End go_purchase */}

                <div className="text-center footer_copyright">
                    <h6>GlassThrone Portfolio ReactJs Template</h6>
                    <h5>
                        &copy; {new Date().getFullYear()} Designed with{" "}
                        <span className="heart">&#10084;</span> by{" "}
                        <a href="#" target="_blank" rel="noreferrer">
                            K-Throne.
                        </a>{" "}
                    </h5>
                </div>
            </footer>
            {/* End footer */}
        </div>
    );
};

export default Preview;
