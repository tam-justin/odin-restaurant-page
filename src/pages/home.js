const homePage = function(){
    const body = document.querySelector("#content");

    const textContainer = document.createElement("div");
    textContainer.id = "home-text";

    const background = document.createElement("div");
    background.id = "home-background";
    
    const title = document.createElement("h1");
    title.id = "home-title";
    title.innerHTML = "The Fancy Place";

    const desc = document.createElement("h2");
    desc.id = "home-desc";
    desc.innerHTML = "An award winning restaurant!"

    const tagLine = document.createElement("h3");
    tagLine.innerHTML = "Who wants to eat some fancy food? Come down and get a taste of the best food you'll ever have.";
    tagLine.id = "home-tagline";

    textContainer.append(title);
    textContainer.append(desc);
    textContainer.append(tagLine);
    background.append(textContainer);
    body.append(background);
}

export default homePage;