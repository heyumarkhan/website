"use strict";

const openModal = document.querySelector(".open-modal");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
console.log("sfsd");
setTimeout(function(){
    
    console.log("cccc");
    modal.classList.remove("inactive");
    modal.classList.add("active");

    closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    modal.classList.add("inactive");
})
},3000 );