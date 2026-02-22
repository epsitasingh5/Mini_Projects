let a = 5;
let b = 10;
console.log(`Price is ${a + b} rupeees`);

console.log('a' > 'A');


let color = "red";
if(color == "red"){
    console.log("Stop");
}
if(color == "yellow"){
    console.log("Slow Down");
}
if(color == "green"){
    console.log("Go");
}

let marks = 49;
if(marks >= 90){
    console.log("A+");
}
else if(marks >= 75){
    console.log("A");
}
else if(marks >= 60){
    console.log("B");
}
else if(marks >= 45){
    console.log("C");
}
else if(marks >=33){
    console.log("D");
}

else if(marks < 33){
    console.log("F");
}

if(marks > 33){
    console.log("pass");

    if(marks >= 80){
        console.log("O");
    }else{
        console.log("A");
    }
}else{
    console.log("betetr luck next time!");
}

// parctice 
let str = "snake";
if(str[0] == 'a' && str.length > 3){
    console.log("This is a good string");
}else{
    console.log("not good string");
}

let number= 5;
switch(number){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}

// alert("this is an alert popup");
// console.error("this shows an error msg.");
// console.warn("this is a warn msg");

// let username = prompt("enter your username");
// let age = prompt("enter your age");
// alert(`${username} is ${age} years old.`);

let x = 5;
let y = 6;
let z = 7;

if(x>y){
    if(x>z){
        console.log(x,"is largest");
    }else{
        console.log(z,"is largest");
    }
}else{
    if(y > z) {
        console.log(y, "is largest");
    }else{
        console.log(z, "is largest");
    }
}

let num1 = 32;
let num2 = 47857;

if(num1 % 10 == num2 % 10){
    console.log("both the numbers have same last digit");
}else{
    console.log("last digits are not same");
}

// string methods

// let msg = "  hello    ";
// console.log(msg.trim());
// console.log(msg.toUpperCase());

 let strname = "IloveCoding";
// console.log(strname.indexOf("K"));
// console.log(strname.indexOf("love"));
 console.log(strname.slice(1,5));
// console.log(strname.slice(-3));

//practice ques

// let name = "ApnaCollege";
// console.log(name.slice(4,9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna","Our"));
// console.log(name.slice(4).replace('l','t').replace('l','t'));

//Arrays

// let fruits = ["apple", "mango" ,"Litchi"];
// let veges = ["tomato", "potato", "ladyfinger"];
// console.log(fruits);

// fruits[0] = "banana";
// console.log(fruits);

// fruits.push("grape");
// console.log(fruits);
// console.log(fruits.pop());
// fruits.unshift("papaya");
// console.log(fruits);

// console.log(fruits.indexOf("mango"));
// console.log(fruits.includes("berry"));

// console.log(fruits.concat(veges));
// console.log(veges.reverse());

// let colors = ["red", "blue", "green", "orange"];
// console.log(colors.splice(3));

// colors.splice(0,0,"yellow","pink");
// console.log(colors);

// colors.splice(1,2);
// console.log(colors);

// colors.splice(0,1,"gray");
// console.log(colors);

// colors.sort();
// console.log(colors);

for(let i=2; i<=20; i = i+2){
    console.log(i);
}

// const favcolor = "pink";

// let guess = prompt("guess the color");

// while(guess!= favcolor){
//     if(guess == "quit"){
//         console.log("you quit");
//         break;
//     }
//     guess = prompt("wrong ans! guess again");
// }

// if(guess == favcolor){
//     console.log("right answer");
// }else{
//     console.log("you are wrong here");
// }

let students = [["aman", 95], ["epsita" , 95] , ["shardha", 100]];

for(let i = 0; i<students.length; i++){
    console.log(`info of students #${i}`)
    for(let j =0; j<students.length; j++){
    console.log(students[i][j]);
    }
}
for(stu of students){
    for(name of stu){
        console.log(name);
    }
}
for(char of "apna"){
console.log(char);
}


//functionexpression

let hello = function func(){
    console.log("hello");
}
hello = function func(){
    console.log("world");
}

//higher order functions
function multipleGreet(funcs,n){
    for(let i = 0; i<=n; i++){
        greet();
    }
}


let greet = function(){
    console.log('HELLOOO');
}

function OddEvenFactory(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n % 2 == 0));
        }
        return odd;
    }else if(request == "even"){
        let odd = function(n){
            console.log(n % 2 == 0);
        }
        return even;
    }else{
        console.log("wrong request");
    }
}
let request = "odd";

//methods

const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}
const calculators = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
}

//this keyword

const Student = {
    name : "epsita",
    age : 20,
    eng : 99,
    math : 95,
    hindi : 100,

    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.hindi)/3;
        console.log(avg);
    }
}

//try & catch in JS
console.log("hello");
try{
    console.log(t);
}catch(err){
    console.log("caught an error.. a is not defined");
    console.log(err);
}
console.log("hello");
console.log("hello");


//arrow function
const print = (m,n) => {
    console.log(m**n);
}
const add = (a,b) => (
    a+b
);

//setTimeout Function
// console.log("hi there!!")
// setTimeout( () => {
//     console.log("APNA COLLEGE")
// },4000);
// console.log("welcome to");

// //setInterval Function

// const id = setInterval( () => {
//     console.log("hello world!!")
// },2000);

//this in arrowfun

const studentdetails = {
    marks : 96,
    name : "levis",

    getname : () => {
        console.log(this);
        console.log(this.name);
    },

    getInfo1 : function () {
        setTimeout(function(){
            console.log(this);
            console.log(this.marks);
        },2000)
    },
    getInfo2 : function () {
        setTimeout( () => {
            console.log(this);
            console.log(this.marks);
        },2000)
    }

}

let arr1 = [1,2,3,4,5];
let printnumber = function(el){
    console.log(el);
}

arr1.forEach(
    function(el){
        console.log(el);
    }
)

let val = arr1.map(function(el){
    return el * 2;
})

let check = [1,3,5,7];

let values = check.filter(function(el){
    return el % 2 == 0;
})

let finalSumm = arr1.reduce((res , el) => {
     return res + el
});


let maximum = arr1.reduce((max, el) => {
    if(max < el){
        return el;
    }else{
        return max;
    }
}) 

let obj = {
    name : "harry",
    class : 12
};

let objcopy = { ...obj,id : "123"};

function sum(...args) {
    for(let i=0; i<args.length; i++){
        console.log("You gave us:",args[i]);
    }
}

function min(a,b,c,d) {
    console.log(arguments);
}

function sums(...args) {
    return args.reduce((sum, el) => sum + el);
}

let names = ["tony", "bruce", "peter"];
let [Winner , Runnerup, ...others] = names;
console.log(names);

 let btns = document.querySelectorAll("button");

// for(btn of btns) {
// btn.onclick = function(){
//     console.log("You liked this post ");
// }
// };
// for(btn of btns) {
//     btn.onmouseenter = function(){
//         console.log("you hover on button");
//     }
//     };

for(btn of btns){
btn.addEventListener("click",function (){
    console.log("button clicked");
});
btn.addEventListener("click",function (){
    console.log("button clicked again");
})
};
