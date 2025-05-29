"use strict";

const openModal = document.querySelector(".open-modal");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
let cookiee = document.cookie;
setTimeout(function(){
    console.log(document.cookie);
    if(document.cookie.includes("Accepted")){
    modal.classList.remove("inactive");
    modal.classList.add("active");
    closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    modal.classList.add("inactive");
    document.cookie = "Status" +"=" + "Accepted";
    console.log(document.cookie);
    });
}
    cookiee.split('=').forEach(function (item){
        console.log(item);
    });

},3000 );
