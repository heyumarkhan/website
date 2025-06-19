fetch('https://jsonplaceholder.typicode.com/todos',{
    method: 'POST',
    headers: {'content-type' : 'application/json'},
    body: JSON.stringify({ title: "Hehehe", body: 'Haahhaha', userId: 1 })
})
.then(response => response.json())
.then (data => {
    console.log(data);
    
}
)
.catch(error => console.error(error))

