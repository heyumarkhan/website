"use strict";

let firstTab, secondTab, thirdTab, fourthTab, firstContent, secondContent, thirdContent, fourthContent;

// assigning tabs
firstTab = document.querySelector('.first-tab');
secondTab = document.querySelector('.second-tab');
thirdTab = document.querySelector('.third-tab');
fourthTab = document.querySelector('.fourth-tab');

// assigning content container
firstContent = document.querySelector('.first-content');
secondContent = document.querySelector('.second-content');
thirdContent = document.querySelector('.third-content');
fourthContent = document.querySelector('.fourth-content');

// First tab
firstTab.addEventListener('click', function(){
   firstTab.classList.add('active-tab');
   firstContent.classList.add('active-content');
   firstContent.classList.remove('inactive-content');
   
   
   secondTab.classList.remove('active-tab');
   secondContent.classList.remove('active-content');
   secondContent.classList.add('inactive-content');

   thirdTab.classList.remove('active-tab');
   thirdContent.classList.remove('active-content');
   thirdContent.classList.add('inactive-content');
   
   fourthTab.classList.remove('active-tab');
   fourthContent.classList.remove('active-content');
   fourthContent.classList.add('inactive-content');
});
// Second tab
secondTab.addEventListener('click', function(){
   firstTab.classList.remove('active-tab');
   firstContent.classList.remove('active-content');
   firstContent.classList.add('inactive-content');
   
   secondTab.classList.add('active-tab');
   secondContent.classList.remove('inactive-content');
   secondContent.classList.add('active-content');
   
   thirdTab.classList.remove('active-tab');
   thirdContent.classList.remove('active-content');
   thirdContent.classList.add('inactive-content');

   fourthTab.classList.remove('active-tab');
   fourthContent.classList.remove('active-content');
   fourthContent.classList.add('inactive-content');
   console.log(secondTab);
});

// Third tab
thirdTab.addEventListener('click', function(){
   firstTab.classList.remove('active-tab');
   firstContent.classList.remove('active-content');
   firstContent.classList.add('inactive-content');

   secondTab.classList.remove('active-tab');
   secondContent.classList.add('inactive-content');
   secondContent.classList.remove('active-content');
   
   
   thirdTab.classList.add('active-tab');
   thirdContent.classList.remove('inactive-content');
   thirdContent.classList.add('active-content');
 
   fourthTab.classList.remove('active-tab');
   fourthContent.classList.remove('active-content');
   fourthContent.classList.add('inactive-content');   
   console.log(thirdTab);
});

// Fourth tab
fourthTab.addEventListener('click', function(){
   firstTab.classList.remove('active-tab');
   firstContent.classList.remove('active-content');
   firstContent.classList.add('inactive-content');  
   
   secondTab.classList.remove('active-tab');
   secondContent.classList.add('inactive-content');
   secondContent.classList.remove('active-content');

   thirdTab.classList.remove('active-tab');
   thirdContent.classList.add('inactive-content');
   thirdContent.classList.remove('active-content');


   fourthTab.classList.add('active-tab');
   fourthContent.classList.remove('inactive-content');
   fourthContent.classList.add('active-content');
   console.log(fourthTab);
});