const counter = document.getElementById("counter");
const composer = document.querySelector('.composer');

function myfunction(string){
    counter.textContent = string.length;
     if(string.length <= 250){
          counter.style.color = '#000';
          composer.style.borderColor = '#000';
          document.querySelector('span').style.color = '#000';
     }else{
          counter.style.color = '#FF0000';
          composer.style.borderColor = '#FF0000';
          document.querySelector('span').style.color = '#FF0000';
     };
};