import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const NotFound = () => {
    // Aos For animation
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    return (
        <div className="not_found_page">
            <div
                className="page"
                style={{
                    backgroundColor: "#ffffff",
                }}
            >
                <div className="content">
                    <h1 data-aos="fade-up" data-aos-duration="1100">
                        404!
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-duration="1100"
                        data-aos-delay="40"
                    >
                        The page you are looking for could not be found.
                    </p>

                    <div
                        className="button"
                        data-aos="fade-up"
                        data-aos-duration="1100"
                        data-aos-delay="90"
                    >
                        <Link to="/">BACK TO HOME</Link>
                    </div>
                    {/* End purchase_button */}
                </div>
            </div>
            {/* End .hero */}
        </div>
    );
};

export default NotFound;
