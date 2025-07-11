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

    const desc = document.createElement("div");
    desc.id = "about-desc";
    desc.innerHTML = "There is no other place in the world with food and service like ours! Come down and try it yourself! You will <strong>NOT</strong> be disappointed.";

    textSection.appendChild(title);
    textSection.appendChild(about);
    textSection.appendChild(desc);
    background.append(textSection);


    content.appendChild(background);
}

export default aboutPage;