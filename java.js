//counting function
let counter = 0;

function increment(){
    counter++;
    document.querySelector("#star").innerHTML = counter;
}

// pop-up function
function pop() {
    let name = document.querySelector("#name").value;
    if (name === null) {
        name = 'world';
    }
    alert('Hello ' + name + ' !');
}

