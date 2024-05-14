import  {homeLoad} from './home';
import {menuLoad} from './menu';
import {aboutLoad} from './about';

homeLoad();

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about");

//tab buttons click
home.addEventListener("click", ()=>{
    homeLoad();
})

menu.addEventListener("click", ()=>{
    menuLoad();
})

about.addEventListener("click", ()=>{
    aboutLoad();
})


const hover = function(e){
    e.target.style.borderBottom = "5px solid orange";
}
//tab buttons hover
const buttons = document.querySelectorAll("nav > button");
for(let i=0; i < 3; i++){
    buttons[i].addEventListener("mouseover", hover);
    buttons[i].addEventListener("mouseout", ()=>{
        buttons[i].style.borderBottom = "0px"
    })
}