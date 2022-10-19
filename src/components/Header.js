import React from "react";

const Header = ({ toggle, ComponentActive }) => {
    return (
        <header id="header">
            <div className="stretchy-navigation">
                {/* eslint-disable-next-line */}
                <a className="nav-trigger" href="#" onClick={toggle}>
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
