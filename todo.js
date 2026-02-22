let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");



button.addEventListener("click",()=> {
    let item = document.createElement("li");
    let btn = document.createElement("button");
    btn.innerText = "delete";
    item.innerText = input.value;
    ul.appendChild(item);
    item.append(btn);
    
    console.log(input.value);
    btn.addEventListener("click",()=>{
    ul.removeChild(item);
})

})

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
        
    }
    catch(error){
        return "no fact found";}
}

async function getCollegenames(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        console.log(data);
        let res = await fetch(url);

        

    }
