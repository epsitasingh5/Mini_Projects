
//Qs1.Write a JS program to delete all occurrences of element‘num’ in a given array.
// Example: if arr=[1,2,3,4,5,6,2,3] & num=2 Result should be arr=[1,3,4,5,6,3]
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for(let i=0;i<arr.length;i++){
//    if(arr[i]== num){
//     arr.splice(i,1);
//    }
// }
// console.log(arr);

// //Qs2.Write a JS program to find the no of digits in a number. Example : if number = 287152,count=6
//  let number = 287152;
//  let count = 0;
 
//  let copy = number;
//  while(copy > 0){
//    count++;
//    copy = Math.floor(copy/10);
//  }
//  console.log(count++);

//  //Qs3.Write a JSprogram to find the sum of digits in a number. Example: if number=287152 , sum=25
//  let nums = 287152;
//  let sum = 0;
 
//  let copynum = nums;
//  while(copynum > 0){
//    sum += copynum % 10;
//    copynum = Math.floor(copynum/10);    
//  }
//  console.log(sum);

//  //Qs4.Print the factorial of a number n.[Factorial of a number n is the product of all positive integers less than or equal 
//  // to a given positive integer and denoted by that integer.] Example: 7! (factorialof7) = 1x2x3x4x5x6x7 = 5040
//  // 5! (factorialof5) = 1x2x3x4x5=1203! (factorialof3) = 1x2x3=60! Is always 1
//  let test = 7;
//  let fact = 1;
//  for(let i = 1; i <= test; i++){
//       fact *= i;
//  }
//  console.log(fact);
//  //Qs5.Find the largest number in an array with only positive numbers.
//  let positiveNumbers = [1, 6, 5, 3, 9];

//  let largest = 0;

//  for(let i=0; i<positiveNumbers.length; i++){
//    if(largest < positiveNumbers[i]){
//        largest = positiveNumbers[i];
//    }
//  }
//  console.log(largest);

//  //Qs6.
 
//  function func(arr,num){
//   for(let i = 0;i<=arr.length; i++){
//     if(arr[i] > num){
//       console.log(arr[i]);
//     }
//   }
//  }
//  let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

//  // Qs7

//  let str = "abcdeffgahciigdef";

//  function getUnique(str){
//     let ans="";

//     for(let i = 0; i<str.length; i++){
//       let currChar = str[i];
//       if(ans.indexOf(currChar) == -1){
//         ans += currChar;
//       }

//     }
//     return ans;
//  }

//  const country=["Australia","Germany","UnitedStatesofAmerica"];

//  function longestCountry(country){
//   let largest = "";
//     for(let i = 0 ; i<country.length; i++){

//         if( largest < country[i] ){
//           largest = country[i];
//         }
//     }
//     return largest;
//  }

//  let vowels = "apnacollege";
 
//  function countVowel(vowels){
//   let countofVowel = 0;
//     for(let i =0; i<vowels.length; i++){
//       if( vowels.charAt(i) == 'a' || vowels.charAt(i)  == 'e' || vowels.charAt(i)  == 'i' || vowels.charAt(i)  == 'o' || vowels.charAt(i)  == 'u' ){
//           countofVowel++;
//       }
//     }
//     return countofVowel;
//  }

//  let start=100;
//  let end=200;
//  function generateRandom(start,end){
//   let diff = end-start;
//   return Math.floor(Math.random()*diff)+start;
// }
// let numberarray = [4 , 5 , 6];
// const arrayAverage = (numberarray) => {
//   let total = 0;

//     for(let number of numberarray){
//         total += number;
//     }
//     return total/numberarray.length;
// }
// const isEven = (n) => {
//      if(n%2 == 0){
//          return even;
//      }else{
//         return false;
//      }
// }

// let length = 4;
// function callback() {
//   console.log(this.length);
// }
// const object = {
//   length:5,
//   method(callback){ 
//     callback();
//   },
// };


// //Q
// let numsarr = [1,2,3,4,5];
// const square = numsarr.map((num) => num * num);
// console.log(square);

// let sumarr = square.reduce((acc,el) => {
//     return acc + el;
// });

// let avg = sumarr / numsarr.length;
// console.log(avg);


// //Q
// let newNumsArr = numsarr.map( function(el) {
//           return (el + 5); 
// });
// console.log(newNumsArr);

// //Q
// let smallCase = ["tony","harry","peter"];

// let upperCase = smallCase.map( function(el){
//    return el.toUpperCase();
// });

// //Q

// const doubleAndReturnArgs = (arr,...args) => [
//   ...arr,
//   ...args.map( (v) => v * 2),
// ];


// // const object1 = {
// //   name : "tony",
// //   class : 11
// // };
// // const object2 = {
// //   name : "peter",
// //   class : 12
// // };

// const mergeObjects = (obj1 , obj2) => ({...obj1 , ...obj2});

// //Js practice questions
// let h3 = document.createElement('h3');
// h3.innerText = "I'm a blue";
// h3.style.color = 'blue';
// let body = document.querySelector('body');
// body.append(h3);

// let div = document.createElement('div');
// div.style.border = '1px solid black';
// div.style.backgroundColor = 'pink';

// let h1 = document.createElement('h1');
// h1.innerText = "I'm in a div";
// div.appendChild(h1);
// let p = document.createElement('p');
// p.innerText = "ME TOO";
// div.appendChild(p); 

// body.append(div);

// //JS 8 practice question


// let button = document.createElement("button");
// button.innerText = "Click me";
// button.setAttribute("id","btn");
// button.classList.add("btn");

// let input = document.createElement("input");
// input.setAttribute("placeholder","username");

// body.append(input);
// body.append(button);

// let h1Element = document.createElement("h1");
// h1Element.innerText = " DOM Practice!!";
// h1Element.classList.add("h1Ele");
// body.append(h1Element);

// let pTag = document.createElement("pTag");
// pTag.innerHTML = "Apna College <b>Delta</b> Practice";
// body.append(pTag);

// //JS 9 practice questions
//1
// //let p = document.querySelector('p');
// window.addEventListener("scroll", function(){
//     console.log("keep scrolling");
// });

// window.addEventListener("load", (event) => {
//   console.log("page is fully loaded");
// });

//2
let btn1 = document.createElement('button');
let body = document.querySelector("body");
body.append(btn1);
btn1.innerText = "click";
btn1.addEventListener("click", function(){
  //btn1.style.backgroundColor = "green";
  btn1.classList.add("green");
})


//3
let input = document.querySelector("input");
let h2 = document.querySelector('h2');

input.addEventListener("input", function (){
 h2.innerText = input.value;
})
