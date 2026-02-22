let btn = document.querySelector("button");
btn.addEventListener("click", function (event){
    console.log(event);
});


let input = document.querySelector('input');
input.addEventListener("keydown", function(event){
    console.log("KEY PRESSED...");
    console.log("key = ",event.key);
    console.log("CODE = ",event.code);

});

input.addEventListener("keydown", function(event){
    if(event.code == "ArrowUp" ){
        console.log("move right");
    }else if(event.code == "ArrowLeft"){
        console.log("move left");
    }else if(event.code == "ArrowRight"){
        console.log("move right");
    }else if(event.code == "ArrowDown"){
        console.log("move down");
    }
})

// let form = document.querySelector('form');

// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     let pass = document.querySelector("#pass");
//     let user = document.querySelector("#user");
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`Hi ${user.value} your password is set to ${pass.value}`);
//     //alert('form submitted');
// })

let user = document.querySelector("#user");

// user.addEventListener("change" , function (event) {
//     event.preventDefault();
//     console.log(this.value);

// })
user.addEventListener("input" , function (event) {
    event.preventDefault();
    console.log(this.value);

})

//EVENT--BUBBLING

let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');
div.addEventListener("click" , function(event) {
    event.stopPropagation();
    console.log("div was clicked");

})
ul.addEventListener("click" , function(event) {
    event.stopPropagation();
    console.log("ul was clicked");

})

for(li of lis){
li.addEventListener("click" , function(event) {
    event.stopPropagation();
    console.log("li was clicked");

})
};