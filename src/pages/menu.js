function menuItem(name, desc, img, price){
    const item = document.createElement("div");
    item.classList.add("menu-item");

    const foodName = document.createElement("div");
    foodName.classList.add("item-name");
    foodName.innerHTML = name;

    const foodDesc = document.createElement("div");
    foodDesc.classList.add("item-desc");
    foodDesc.innerHTML = desc;

    const foodImg = document.createElement("img");
    foodImg.src = img;

    const foodPrice = document.createElement("div");
    foodPrice.classList.add("item-price");
    foodPrice.innerHTML = price;

    item.appendChild(foodImg);
    item.appendChild(foodName);
    item.appendChild(foodDesc);
    item.appendChild(foodPrice);

    return item;
}

const menuPage = function(){
    const content = document.querySelector("#content");

    const background = document.createElement("div");
    background.id = "menu-background";

    const title = document.createElement("div");
    title.id = "menu-title";
    title.innerHTML = "Menu";

    const menu = document.createElement("div");
    menu.id = "menu";

    background.appendChild(title);
    background.appendChild(menu);
    content.appendChild(background);
}

export default menuPage;