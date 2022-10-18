// Import Style
import "./App.css";
import "./Assets/css/font-awesome.min.css";
import "./Assets/css/skins/yellow.css";
import "./Assets/css/styleswitcher.css";
// Import Functions
import {
    toggle,
    ComponentActive,
    MobileComponentActive,
    hideSwitcher,
    cogToggle,
} from "./Assets/lib.js";

// Import Components
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
function App() {
    return (
        <div class="">
            <div>
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
                                    <a href="#" title="blue" className="color">
                                        <img
                                            src={require("./Assets/img/styleswitcher/blue.png")}
                                            alt="blue"
                                        />
                                    </a>
                                </li>
                                <li>
                                    {/* eslint-disable-next-line */}
                                    <a href="#" title="red" className="color">
                                        <img
                                            src={require("./Assets/img/styleswitcher/red.png")}
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
                                    >
                                        <img
                                            src={require("./Assets/img/styleswitcher/goldenrod.png")}
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
                                    >
                                        <img
                                            src={require("./Assets/img/styleswitcher/magenta.png")}
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
                                    >
                                        <img
                                            src={require("./Assets/img/styleswitcher/yellowgreen.png")}
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
                                    >
                                        <img
                                            src={require("./Assets/img/styleswitcher/orange.png")}
                                            alt="orange"
                                        />
                                    </a>
                                </li>
                                <li>
                                    {/* eslint-disable-next-line */}
                                    <a href="#" title="green" className="color">
                                        <img
                                            src={require("./Assets/img/styleswitcher/green.png")}
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
                                    >
                                        <img
                                            src={require("./Assets/img/styleswitcher/yellow.png")}
                                            alt="yellow"
                                        />
                                    </a>
                                </li>
                            </ul>
                            <br />
                            {/* eslint-disable-next-line */}
                            <a
                                href=""
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
                    <Header
                        toggle={toggle}
                        MobileComponentActive={MobileComponentActive}
                        ComponentActive={ComponentActive}
                    />

                    <main id="main" className="">
                        <span className="back-mobile" id="back-mobile">
                            <i className="fa fa-arrow-left" />
                        </span>
                        <Home />
                        <About />
                        <Portfolio />
                        <Contact />
                        <Blog />
                    </main>
                </div>
                {/* <div className="preloader loaded">
                    <div className="preloader-container">
                        <h1>daria</h1>
                        <div id="progress-line-container">
                            <div className="progress-line" />
                        </div>
                        <h1>taylor</h1>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default App;
