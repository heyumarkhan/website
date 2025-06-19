const list = document.querySelector('ul');

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    
    let html ="";
    data.forEach((element) => {
        console.log(element);
       html += `
            <li class="listItem">
                <p class="name">${element.name}</p>
                <p class="name">${element.email}/p>
            </li>            
        `
    });
    list.innerHTML = html;
    }
);
