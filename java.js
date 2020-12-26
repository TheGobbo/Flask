//counting function
let counter = 0;

function increment(){
    counter += 1;
    document.querySelector("#star").innerHTML = counter;
}

// pop-up function
function pop() {
    let name = document.querySelector("#name").value;
    if (name === '') {
        name = 'woruld';
    }
    alert('Hello ' + name + ' !');
}




