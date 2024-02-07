"use strict";

const $HTML = document.documentElement;
const isDark = window.matchMedia("(prefers-color-scheme:dark").matches;

if(sessionStorage.getItem("theme")){
    $HTML.dataset.theme = sessionStorage.getItem("theme");
}
else{
    $HTML.dataset.theme = isDark ? "dar;" : "light"
}

let isPressed = false;

const changeTheme = function (){

}

window.addEventListener("load",function(){
    const $themeBtn = document.querySelector("[data-theme-btn]");
    $themeBtn.addEventListener("click",changeTheme)
})