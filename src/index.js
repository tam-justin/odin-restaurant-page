/**
 * Imports
 */
import "./styles/default.css";
import "./styles/home.css"
import initialLoad from "./functions/initialLoad.js"

import menu from "./pages/menu.js";
import about from "./pages/about.js";
import contact from "./pages/contact.js";
import home from "./pages/home.js";

let curPage = "home";

const addEventListeners = () => {
    const content = document.querySelector("#content");
    
    const homeButton = document.querySelector("#home-button");
    homeButton.addEventListener("click", () => {
        if(curPage == "home"){
            return;
        }
        console.log("Setting page to home");
        content.innerHTML = "";
        home();
        curPage = "home";
    })

    const menuButton = document.querySelector("#menu-button");
    menuButton.addEventListener("click", () => {
        if(curPage == "menu"){
            return;
        }
        console.log("Setting page to menu");
        content.innerHTML = "";
        menu();
        curPage = "menu";
    })

    const aboutButton = document.querySelector("#about-button");
    aboutButton.addEventListener("click", () => {
        if(curPage == "about"){
            return;
        }
        console.log("Setting page to about");
        content.innerHTML = "";
        about();
        curPage = "about";
    })

    const contactButton = document.querySelector("#contact-button");
    contactButton.addEventListener("click", () => {
        if(curPage == "contact"){
            return;
        }
        console.log("Setting page to contact");
        content.innerHTML = "";
        contact();
        curPage = "contact";
    })
}

initialLoad();
addEventListeners();
console.log("Webpage up!");