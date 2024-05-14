import './style.css';
import steak from './steak.jpg';


function homeLoad(){
    //remove pre-existing stuff
    const del = document.querySelector(".stuff");
    if(del !== null) del.remove();

    
    const content = document.querySelector("#content");
    const stuff = document.createElement("div");
    stuff.classList.add("stuff");
    content.appendChild(stuff);


    //add restaurant name and catchphrase
    const rname = document.createElement("div");
    rname.classList.add("rname")
    const catchphrase = document.createElement("div");
    catchphrase.classList.add("catchphrase");

    rname.textContent = "Nameless Restaurant";
    catchphrase.textContent = "Best restaurant ever";

    stuff.appendChild(rname);
    stuff.appendChild(catchphrase);
}

export {homeLoad};