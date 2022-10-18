import React from "react";

const Header = ({ toggle, MobileComponentActive, ComponentActive }) => {
    return (
        <header id="header">
            <div className="nav-container">
                <div>
                    <ul id="nav" className="navigation">
                        <li
                            className="active"
                            id="link-home"
                            onClick={() => MobileComponentActive("link-home")}
                        >
                            <div>
                                {/* eslint-disable-next-line */}
                                <a id="link-home" href="#" className="active">
                                    <i className="fa fa-home" />
                                    <span>Home</span>
                                </a>
                            </div>
                        </li>
                        <li className="" id="link-about">
                            <div>
                                {/* eslint-disable-next-line */}
                                <a href="#" className="">
                                    <i className="fa fa-user" />
                                    <span>About me</span>
                                </a>
                            </div>
                        </li>
                        <li
                            className=""
                            id="link-work"
                            onClick={() => MobileComponentActive("link-work")}
                        >
                            <div>
                                {/* eslint-disable-next-line */}
                                <a id="link-work" href="#" className="">
                                    <i className="fa fa-briefcase" />
                                    <span>my Portfolio</span>
                                </a>
                            </div>
                        </li>
                        <li
                            className=""
                            id="link-contact"
                            onClick={() =>
                                MobileComponentActive("link-contact")
                            }
                        >
                            <div>
                                {/* eslint-disable-next-line */}
                                <a href="#" className="">
                                    <i className="fa fa-envelope-open" />
                                    <span>get in touch</span>
                                </a>
                            </div>
                        </li>
                        <li
                            className=""
                            id="link-blog"
                            onClick={() => MobileComponentActive("link-blog")}
                        >
                            <div>
                                {/* eslint-disable-next-line */}
                                <a href="#" className="">
                                    <i className="fa fa-comments" />
                                    <span>my Blog</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cd-stretchy-nav">
                {/* eslint-disable-next-line */}
                <a className="cd-nav-trigger" href="#" onClick={toggle}>
                    <span aria-hidden="true" />
                </a>
                <ul className="stretchy-nav">
                    <li
                        id="nav-home"
                        className="active"
                        onClick={() => ComponentActive("home")}
                    >
                        {/* eslint-disable-next-line */}
                        <a href="#">
                            <span>Home</span>
                        </a>
                    </li>
                    <li
                        id="nav-about"
                        className=""
                        onClick={() => ComponentActive("about")}
                    >
                        {/* eslint-disable-next-line */}
                        <a href="#">
                            <span>About</span>
                        </a>
                    </li>
                    <li
                        id="nav-portfolio"
                        className=""
                        onClick={() => ComponentActive("portfolio")}
                    >
                        {/* eslint-disable-next-line */}
                        <a href="#">
                            <span>Portfolio</span>
                        </a>
                    </li>
                    <li
                        id="nav-contact"
                        className=""
                        onClick={() => ComponentActive("contact")}
                    >
                        {/* eslint-disable-next-line */}
                        <a href="#">
                            <span>Contact</span>
                        </a>
                    </li>
                    <li
                        id="nav-blog"
                        className=""
                        onClick={() => ComponentActive("blog")}
                    >
                        {/* eslint-disable-next-line */}
                        <a href="#">
                            <span>Blog</span>
                        </a>
                    </li>
                </ul>
                <span aria-hidden="true" className="stretchy-nav-bg" />
            </div>
        </header>
    );
};

export default Header;
