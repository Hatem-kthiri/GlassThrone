const toggle = () => {
    document
        .querySelector(".stretchy-navigation")
        .getAttribute("class")
        .includes("nav-is-visible")
        ? document
              .querySelector(".stretchy-navigation")
              .classList.remove("nav-is-visible")
        : document
              .querySelector(".stretchy-navigation")
              .classList.add("nav-is-visible");
};
const ComponentActive = (ComponentId) => {
    var li = document.querySelector(".stretchy-nav").querySelectorAll("li");
    li.forEach((element) => element.classList.remove("active"));
    document.getElementById(`nav-${ComponentId}`).classList.add("active");

    document
        .querySelector(".stretchy-navigation")
        .classList.remove("nav-is-visible");

    document
        .querySelectorAll("section")
        .forEach((section) => section.classList.remove("active"));
    document.getElementById(ComponentId).classList.add("active");
};

const cogToggle = () => {
    document.getElementById("switcher").style.display = "block";
    document.getElementById("showSwitcher").style.display = "none";
};
const hideSwitcher = () => {
    document.getElementById("switcher").style.display = "none";
    document.getElementById("showSwitcher").style.display = "block";
};
const ChangeColor = (color) => {
    // document.getElementsByTagName("style")[3].innerHTML = color;
    localStorage.setItem("color", `${color}`);
    var head = document.querySelector("head");

    console.log(head.children);
    var style = document.createElement("style");
    style.append(color);
    head.append(style);
    for (let i = 0; i < head.children.length; i++) {
        if (head.children[i].innerHTML.includes(color)) {
            console.log(head.children[i]);
        }
    }
};
module.exports = {
    ChangeColor,
    hideSwitcher,
    cogToggle,
    toggle,
    ComponentActive,
};
