"use strict";

const searchField = document.querySelector("[data-search-field]");
const searchBtn = document.querySelector("[data-search-btn]");

searchBtn.addEventListener("click",function(){
    if(searchField.value) 
        window.location = `/recipes.html?q=${searchField.value}`;
});

searchField.addEventListener("keydown", enter => {
    if(enter.key === "Enter")
    {
        searchBtn.click();
    }
});

const tabBtns = document.querySelectorAll("[data-tab-btn]");
const tabPanels = document.querySelectorAll("[data-tab-panel]");

let [lastActiveTabPanel] = tabPanels;
let [lastActiveTabBtn] = tabBtns;

addEventOnElements(tabBtns, "click", function(){
    lastActiveTabPanel.setAttribute("hidden", "");
    lastActiveTabBtn.setAttribute("aria-selected", false);
    lastActiveTabBtn.setAttribute("tabindex", -1);


const currentTabPanel = document.querySelectorAll`#{this.getAttribute("aria-control")}`;

currentTabPanel.removeAttribute("hidden");
this.setAttribute("aria-selected", true);
this.setAttribute("tabindex", 0);

lastActiveTabPanel = currentTabPanel;
lastActiveTabBtn = this;

});

addEventOnElements(tabBtns, "keydown", function(enter){

    const nextElement = this.nextElementSibling;
    const prevElement = this.prevElementSibling;

    if(enter.key === "ArrowRight" && nextElement)
    {
        this.setAttribute("tabindex", -1);
        nextElement.setAttribute("tabindex", 0);
        nextElement.focus();
    }
    else if (enter.key === "ArrowLeft" && prevElement)
    {
        this.setAttribute("tabindex", -1);
        prevElement.setAttribute("tabindex", 0);
        prevElement.focus();
    }
    else if(enter.key === "Tab"){
        this.setAttribute("tabindex", -1);
        lastActiveTabBtn.setAttribute("tabindex", 0);
        
    }
})
