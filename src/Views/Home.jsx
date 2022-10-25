import React from "react";
// Import Style
import "../App.css";
// Icon Style
import "../Assets/css/font-awesome.min.css";
// Select Your Portfolio Style Color
import "../Assets/css/skins/skin.css";
import "../Assets/css/styleswitcher.css";

// Import Functions
import {
    toggle,
    ComponentActive,
    hideSwitcher,
    cogToggle,
    ChangeColor,
} from "../Assets/lib.js";

// Import Components
import About from "../components/About/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Header from "../components/Header";
import HomeInterface from "../components/Home";
import Portfolio from "../components/Portfolio";

import {
    blue,
    goldrenrod,
    green,
    magenta,
    orange,
    red,
    yellow,
    yellowgreen,
} from "../Assets/js/skins";
const Home = () => {
    return (
        <div className="">
            <div
                className="page animated"
                style={{ animationDuration: "500ms" }}
            >
                <div id="switcher" className="" style={{ display: "none" }}>
                    <div className="content-switcher">
                        <h4>STYLE SWITCHER</h4>
                        <ul>
                            <li>
                                {/* eslint-disable-next-line */}
                                <a
                                    href="#"
                                    title="blue"
                                    className="color"
                                    onClick={() => ChangeColor(blue)}
                                >
                                    <img
                                        src={require("../Assets/img/styleswitcher/blue.png")}
                                        alt="blue"
                                    />
                                </a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line */}
                                <a
                                    href="#"
                                    title="red"
                                    className="color"
                                    onClick={() => ChangeColor(red)}
                                >
                                    <img
                                        src={require("../Assets/img/styleswitcher/red.png")}
                                        alt="red"
                                    />
                                </a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line */}
                                <a
                                    href="#"
                                    title="goldrenrod"
                                    className="color"
                                    onClick={() => ChangeColor(goldrenrod)}
                                >
                                    <img
                                        src={require("../Assets/img/styleswitcher/goldenrod.png")}
                                        alt="goldrenrod"
                                    />
                                </a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line */}
                                <a
                                    href="#"
                                    title="magenta"
                                    className="color"
                                    onClick={() => ChangeColor(magenta)}
                                >
                                    <img
                                        src={require("../Assets/img/styleswitcher/magenta.png")}
                                        alt="magenta"
                                    />
                                </a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line */}
                                <a
                                    href="#"
                                    title="yellowgreen"
                                    className="color"
                                    onClick={() => ChangeColor(yellowgreen)}
                                >
                                    <img
                                        src={require("../Assets/img/styleswitcher/yellowgreen.png")}
                                        alt="yellowgreen"
                                    />
                                </a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line */}
                                <a
                                    href="#"
                                    title="orange"
                                    className="color"
                                    onClick={() => ChangeColor(orange)}
                                >
                                    <img
                                        src={require("../Assets/img/styleswitcher/orange.png")}
                                        alt="orange"
                                    />
                                </a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line */}
                                <a
                                    href="#"
                                    title="green"
                                    className="color"
                                    onClick={() => ChangeColor(green)}
                                >
                                    <img
                                        src={require("../Assets/img/styleswitcher/green.png")}
                                        alt="green"
                                    />
                                </a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line */}
                                <a
                                    href="#"
                                    title="yellow"
                                    className="color"
                                    onClick={() => ChangeColor(yellow)}
                                >
                                    <img
                                        src={require("../Assets/img/styleswitcher/yellow.png")}
                                        alt="yellow"
                                    />
                                </a>
                            </li>
                        </ul>
                        <br />
                        {/* eslint-disable-next-line */}
                        <a
                            href="https://themeforest.net/user/k-throne"
                            className="waves-effect waves-light btn font-weight-600 purchase hoverable"
                        >
                            <span>
                                <i className="fa fa-shopping-cart" />
                                PURCHASE
                            </span>
                        </a>
                        <div id="hideSwitcher" onClick={hideSwitcher}>
                            ×
                        </div>
                    </div>
                </div>
                <div
                    id="showSwitcher"
                    className="styleSecondColor"
                    onClick={cogToggle}
                    style={{ display: "block" }}
                >
                    <i className="fa fa-cog fa-spin" />
                </div>
                <Header toggle={toggle} ComponentActive={ComponentActive} />

                <main id="main" className="">
                    <HomeInterface />
                    <About />
                    <Portfolio />
                    <Contact />
                    <Blog />
                </main>
            </div>
        </div>
    );
};

export default Home;
