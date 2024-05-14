import './style.css';

function menuLoad(){
    //remove pre-existing stuff
    const del = document.querySelector(".stuff");
    if(del !== null) del.remove();

    //add stuff
    const content = document.querySelector("#content");
    const stuff = document.createElement("div");
    stuff.classList.add("stuff");
    content.appendChild(stuff);

    //create title
    const menu_title = document.createElement("div");
    menu_title.classList.add("menu-title")
    menu_title.textContent = "Our Menu";
    stuff.appendChild(menu_title);

    //create menu items
    let items = [];
    for(let i=0; i < 5; i++){
        let item = document.createElement("div");
        item.classList.add(`item${i}`);
        item.textContent = "Food Name";
        stuff.appendChild(item);
    }


}

export {menuLoad};