import './style.css';

function aboutLoad(){
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
    menu_title.textContent = "About Us";
    stuff.appendChild(menu_title);

    //create "about us" information
    const info = document.createElement("div");
    info.classList.add("info");
    info.textContent = "Nameless Restaurant was conceptualised in 2024 when two nameless creators decided that they wanted to provide an avenue for everything nameless to be known";
    stuff.appendChild(info);
}

export {aboutLoad};