let counter = 0;

function increment(){
    counter++;
    document.querySelector("#star").innerHTML = counter;
}

function pop() {
    let name = document.querySelector("#name").value;
    if (name === null) {
        name = 'world';
    }
    alert('Hello ' + name + ' !');
}

