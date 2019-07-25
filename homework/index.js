let indexA = document.getElementById("demo-a")
console.log(indexA.href);
let inputText = document.getElementById("demo-input") 
let btn = document.getElementById("btn-demo");
console.log(inputText);
btn.addEventListener('click', () => {
    inputText.value = indexA.href;
})


let listOfColor = document.getElementById("listOfColor");



function remove() {
    let x = document.getElementById("listOfColor");

    x.remove(x.selectedIndex);
}

