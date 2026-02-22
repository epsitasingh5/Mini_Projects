let todo = [];
let req = prompt("please enter your request:");

while(true){
    //if you want to quit 
    if(req == "quit"){
        console.log("quitting");
        break;
    }

    //if you want to display list of taasks
    if(req == "list"){
        console.log("---------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("---------");
    }
    //if you want to add task in your list
    else if(req == "add"){
        let task = prompt("enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }

    //if you want to delete any task from the List.

    else if(req == "delete"){
        let idx = prompt("enter idx of task you want to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("wrong request");
    }
    req = prompt("enter your request:");
}