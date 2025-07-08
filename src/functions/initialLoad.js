/**
 * Imports
 */
import homePage from "../pages/home";

const firstLoad = function(){
    const body = document.querySelector("#content");
    let home = homePage();
    body.append(home);
}

export default firstLoad;