const aboutPage = function(){
    const content = document.querySelector("#content");

    const background = document.createElement("div");
    background.id = "about-background";

    content.appendChild(background);
}

export default aboutPage;