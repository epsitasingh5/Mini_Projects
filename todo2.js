let input = document.querySelector('input');
let ul = document.querySelector('ul');
let button = document.querySelector('button');

button.addEventListener("click", function(){
    let item = document.createElement('li');
    item.innerText = input.value;

    let delbutton = document.createElement('button');
    delbutton.innerText = "delete";
    delbutton.classList.add("delete");

    item.appendChild(delbutton);
    ul.appendChild(item);
    input.value = " ";
});

ul.addEventListener("click", function(event){            //event.target -> it targets the  element on which you clciked 
    if(event.target.nodeName == "BUTTON") {             //nodeName -> here it means that button nodename trigerred this event 
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    };
    // if(event.target.classList.contains("delete")){
    //     let par = event.target.parentElement;
    //     par.remove();
    // }
})