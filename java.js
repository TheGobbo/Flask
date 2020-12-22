function pop() {
    let name = document.querySelector("#name").value;
    if (name === null){
        name = 'world';
    }
    alert('Hello ' + name + ' !');
}
