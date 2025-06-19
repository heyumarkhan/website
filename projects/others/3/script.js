const password = document.getElementById("password");
const subBtn = document.getElementById("submit");


function checkLogin(password){
    return new Promise((resolve, reject) =>{
        if(password == "umma")
            resolve ('Successfull.');
        else
            reject ('Not suuccessful.');
    })
}


subBtn.addEventListener('click', () =>{
    checkLogin(password.value)
    .then (res => JSON.stringify(res))
    .then (str => {
        alert(str);
    })
    .catch(err => console.error(err));
    
})


// ----------------- Pizza Delivery Simulation --------

function pizzaDelivery () {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve("Pizza delivered.")
        }, 3000);
    })
} 

pizzaDelivery()
.then (res => {
    alert(res);
})
.catch(err => console.error(err));