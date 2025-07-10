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
    
    menu.appendChild(menuItem("Steak & Fries", "A delicious NY strip with a side of truffle fries.", "https://images.getrecipekit.com/20240516185857-rao-s-20homemade-20steak-20frites-20-2b-20truffle-20fries.webp?aspect_ratio=4:3&quality=90&", "$90"));

    menu.appendChild(menuItem("Truffle Burger", "A delicious wagyu beef burger with truffle, including bacon and cheese.", "https://www.unileverfoodsolutions.com.au/dam/global-ufs/mcos/ANZ/calcmenu/recipes/AU-recipes/red-meats-&-red-meat-dishes/truffle-burger/main-header.jpg", "$65"));

    menu.appendChild(menuItem("Steak Tacos", "Four beef tacos, filled with shredded lettuce, cheese, onions, tomatoes, and taco seasoning.", "https://www.foodandwine.com/thmb/_F59rJejBBVb8FVaFVNUZUb1o60=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chile-Spiced-Skirt-Steak-Tacos-FT-RECIPE0324-43de0cdc294b4a488c006ee6e7e88271.jpg", "$45"));

    menu.appendChild(menuItem("Cheesesteak", "Rib-eye steak, onions, and cheese.", "https://dinnerthendessert.com/wp-content/uploads/2025/02/Philly-Cheesesteak-2.jpg", "$59"));

    content.appendChild(background);
}

export default menuPage;