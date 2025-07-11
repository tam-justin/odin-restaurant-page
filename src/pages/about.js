const aboutPage = function(){
    const content = document.querySelector("#content");

    const background = document.createElement("div");
    background.id = "about-background";

    const textSection = document.createElement("div");
    textSection.id = "about-text";

    const title = document.createElement("div");
    title.id = "about-title";
    title.innerHTML = "About";

    const about = document.createElement("div");
    about.id = "about-line";
    about.innerHTML = "The Fancy Place is a high quality michelin star restaurant with a bistro-style menu. Here, you can find exquisite food with quality ingredients and wonderful service. We have been operating since 1990, and are proud to be one of the top restaurants in the world."

    textSection.appendChild(title);
    textSection.appendChild(about)
    background.append(textSection);


    content.appendChild(background);
}

export default aboutPage;