const toggle = () => {
    document
        .querySelector(".cd-stretchy-nav")
        .getAttribute("class")
        .includes("nav-is-visible")
        ? document
              .querySelector(".cd-stretchy-nav")
              .classList.remove("nav-is-visible")
        : document
              .querySelector(".cd-stretchy-nav")
              .classList.add("nav-is-visible");
};
const ComponentActive = (ComponentId) => {
    var li = document.querySelector(".stretchy-nav").querySelectorAll("li");
    li.forEach((element) => element.classList.remove("active"));
    document.getElementById(`nav-${ComponentId}`).classList.add("active");

    document
        .querySelector(".cd-stretchy-nav")
        .classList.remove("nav-is-visible");

    document
        .querySelectorAll("section")
        .forEach((section) => section.classList.remove("active"));
    document.getElementById(ComponentId).classList.add("active");
};
const MobileComponentActive = (ComponentId) => {};

const cogToggle = () => {
    document.getElementById("switcher").style.display = "block";
    document.getElementById("showSwitcher").style.display = "none";
};
const hideSwitcher = () => {
    document.getElementById("switcher").style.display = "none";
    document.getElementById("showSwitcher").style.display = "block";
};
module.exports = {
    hideSwitcher,
    cogToggle,
    toggle,
    ComponentActive,
    MobileComponentActive,
};
