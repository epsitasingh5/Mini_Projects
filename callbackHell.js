let h1 = document.querySelector('h1');

// function changeColor(color, delay , nextColorChange){
//     setTimeout( () => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     },delay);
// }

// changeColor("red",1000, () =>{
//     changeColor("orange",1000, () =>{
//         changeColor("green",1000, () =>{
//             changeColor("yellow",1000, ()=>{
//                 changeColor("blue",1000);
//             });
//         });
//     });
// });

// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             h1.style.color = color;
//             resolve("color changed");
//         },delay);
//     })
// }


// changeColor("red", 1000)
// .then(() => {
//     console.log("red color")
//     return changeColor("blue",1000);
// })
// .then(() => {
//     console.log("blue color")
//     return changeColor("pink",1000);
// })
// .then(() => {
//     console.log("pink color")
//     return changeColor("yellow",1000);
// })
// .then(() => {
//     console.log("yellow color")
// })
// function saveTodb( data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10 ) +1;
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// saveTodb("apnacol", ()=>{
//     console.log("your data was saved");
//     saveTodb("helloWorld",
//     ()=>{
//         console.log("your data 2 was saved");
//     },()=>{
//         console.log("Weak connection. your data 2 is not sav ");
//     })
// }, ()=>{
//     console.log("Weak connection. your data is not sav ");
// })

//PROMISES

// function saveTodb(){
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10 ) +1;
//         if(internetSpeed > 4){
//                 resolve("your data is saved");
//         }else{
//                 reject("weak connection. try again");
//         }
//     })
// }

//methods in promise

// let result = saveTodb("apnacollege")
// result .then(()=> {
//     console.log("promise resolved");
// })
// .catch(() => {
//     console.log("Promise rejected");
// });

//promise chaining

// saveTodb("apnacollege")
// .then((result)=> {
//     console.log("promise resolved",result);
//     return saveTodb("hello");
// })
// .then((result)=>{
//     console.log("promise resolved,data2 was saved",result);
//     return saveTodb("coders");
// })
// .then((result)=>{
//     console.log("promise resolved,data3 was saved",result);;
// })
// .catch((error) => {
//     console.log("Promise rejected",error);
// });

// async function greet(){
//     throw "some random error";
//     return "heello";
// }

// greet()
// .then( (result)=> {
//     console.log("promise was resolved",result);
    
// })
// .catch((err)=> {
//     console.log("promise was rejected", err);
// })

//async using arrow function

// let hello = async () => {
//     return "hello";
// }


// //await

// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             let num = Math.floor(Math.random()*5) + 1;
//             if(num < 3){
//                 reject('promise rejected');
//             }
//             h1.style.color = color;
//             console.log(`color changed ${color}`);
//             resolve("color changed");
//         },delay);
//     })
// }

// async function demo(params) {
//     try{
//     await changeColor("red",1000);
//     await changeColor("green",1000);
//     await changeColor("purple",1000);
//     changeColor("yellow",1000);
//     }catch(err){
//         console.log('error caught');
//         console.log(err);
//     }

//     let a=5;
//     console.log(a);
//     console.log("new num = " , a+5);
// }

// let jsonRes = '{"fact":"In just 7 years, one un-spayed female cat and one un-neutered male cat and their offspring can result in 420,000 kittens.","length":121}';
// //console.log(jsonRes);

// let validResponse = JSON.parse(jsonRes);
// console.log(validResponse);

// let student = {
//     name: "epsita singh",
//     profession: "student",
// }

// let res = JSON.stringify(student);

// console.log(res);

//let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response) => {
//     console.log(response);
//     return response.json();
// })
// .then((data) => {
//     console.log("data1 =" ,data.fact);
//     return fetch(url);
// })
// .then((response) => {
//     return response.json();
// })
// .then((DATA2) => {
//     console.log("data2 =", DATA2.fact);
// })
// .catch((err) => {
//     console.log("ERROR - ", err);
// })


//api requestt using async & await

// async function getFacts(params) {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//     }catch(e) {
//         console.log("errror - ",e);
//     }
//     console.log("bye");
// }

//axios Method
//let btn = document.querySelector("button");

// btn.addEventListener("click", async() => {
//     let fact = await getDataFact();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })
// async function getDataFact() {
//     try{
//     let res = await axios.get(url);
//     return res.data.fact;
// }catch(e) {
//     console.log("errror - ",e);
//     return "No fact found";
// }
// }


// let url2 = 'https://dog.ceo/api/breeds/image/random';

// btn.addEventListener("click", async() => {
//     let link = await getDogimage();
//     let img = document.querySelector("img");
//     img.setAttribute("src",link);
// })

// async function getDogimage() {
//     try {
//     let img = await axios.get(url2);
//     console.log(img);
//     return img.data.message;
//     } catch(e) {
//         console.log("error -", e);
//     }
// }

//sending headers

// let url3 ='https://icanhazdadjoke.com/';
// let config = {headers: {Accept : "application/json"}};
// async function getJokes() {
//     try {
//     let jokes = await axios.get(url3,config);
//     console.log(jokes.data);
    
//     } catch(e) {
//         console.log("error -", e);
//     }
//}


//activity -- searching universities list  of different country

// let url5  = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async() => {
//     let country = document.querySelector("input").value;

//     console.log(country);
//     let colArr = await getColleges(country);
//     show(colArr);
// })

// function show(colArr){
//     let list =  document.querySelector("#list");
//     list.innerHTML = "";
//     for(col of colArr){
//         console.log(col.name);
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);        
//     }
// }
// async function getColleges(country){
//     try{
//         let res = await axios.get(url5 + country);
//         return res.data;
//     } catch(e){
//         console.log(e);
//     }
// }


//searching universities list based on state

let url5  = "http://universities.hipolabs.com/search?name='india'&state-province=";
let btn = document.querySelector("button");

btn.addEventListener("click", async() => {

    let state = document.querySelector("input").value;
    console.log(state);
    let colArr = await getColleges(state);
    show(colArr);
})

function show(colArr){
    let list =  document.querySelector("#list");
    list.innerHTML = "";
    for(col of colArr){
        console.log(col.state-province);
        let li = document.createElement("li");
        li.innerText = col.state-province;
        list.appendChild(li);        
    }
}
async function getColleges(country,state){
    try{
        let res = await axios.get(url + state);
        return res.data;
    } catch(e){
        console.log(e);
    }
}

