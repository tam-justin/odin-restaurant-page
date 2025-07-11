const contactPage = function(){
    const content = document.querySelector("#content");

    const background = document.createElement("div");
    background.id = "contact-background";

    const container = document.createElement("div");
    container.id = "contact-container";

    const contactSection = document.createElement("div");
    contactSection.id = "contact-section";

    const title = document.createElement("div");
    title.id = "contact-title";
    title.innerHTML = "Have a question or concern? Leave a message here below!";

    const form = document.createElement("form");
    form.id = "contact-form";
    form.action = "#";
    
    const nameEntry = document.createElement("input");
    nameEntry.id = "contact-name";
    nameEntry.type = "text";
    nameEntry.placeholder = "John Apple";
    nameEntry.required = true;

    const textArea = document.createElement("textarea");
    textArea.id = "contact-message";
    textArea.maxLength = "300";
    textArea.placeholder = "Enter your message here.";
    textArea.required = true;

    textArea.addEventListener("input", () => {
        const curLen = textArea.value.length;
        charCount.innerHTML = `${curLen} / ${textArea.maxLength}`;
    })

    const charCount = document.createElement("div");
    charCount.id = "charCount";
    charCount.innerHTML = `0 / ${textArea.maxLength}`;

    const formSubmit = document.createElement("button");
    formSubmit.type = "submit";
    formSubmit.innerHTML = "Send";

    const locationSection = document.createElement("div");
    locationSection.id = "location-section";

    const dropBy = document.createElement("div");
    dropBy.innerHTML = "Want to drop by instead?";
    dropBy.id = "location-title";

    const location = document.createElement("div");
    location.innerHTML = "Find us here at: <br> 123 Really Real Dr <br> Really Real City, USA";
    location.id = "location";

    locationSection.appendChild(dropBy);
    locationSection.appendChild(location);

    contactSection.appendChild(title);
    contactSection.appendChild(form);
    form.appendChild(nameEntry);
    form.appendChild(textArea);
    form.appendChild(charCount);
    form.appendChild(formSubmit);
    container.appendChild(contactSection);
    container.appendChild(locationSection);
    background.appendChild(container);
    content.appendChild(background);
}

export default contactPage;