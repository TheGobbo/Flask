//counting function
let counter = 0;

function increment(){
    counter += 11;
    document.querySelector("#star").innerHTML = counter;
}

// pop-up function
function pop() {
    let name = document.querySelector("#name").value;
    if (name === '') {
        name = 'nameless person';
    }
    alert('Hello ' + name + ' !');
}

