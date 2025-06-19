"use strict";

async function fetchUsers() {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const resJson = await res.json();
        console.log(resJson);
    }catch (error){
        console.log('error:' + error);
    } 
}

fetchUsers();