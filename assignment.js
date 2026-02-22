// let div = document.querySelector('div');
// div.innerText = "This is your new color";

let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    //calling randomcolor first
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    
    console.log("random color generated");
});

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `(${red}, ${green}, ${blue})`;
    return color;
}

let p = document.querySelector('p');
let h1 = document.querySelector('h1');
function changeColor() {
console.log(this.innerText);
    this.style.backgroundColor = "blue";
}

p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
btn.addEventListener("click", changeColor);

