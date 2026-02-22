let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let imgBox = document.querySelector(".imgbox");
let msgContainer = document.querySelector(".msgContainer");
let newBtn = document.querySelector("#newBtn");
let msg = document.querySelector("#msg");
let turnO = "true";

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const resetGame = ()=> {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        audioTurn.play();
        checkWinner();
    })
})
const disableBoxes = ()=> {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=> {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner)=> {
    msg.innerText = `Congratulations Winner is , ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = ()=> {
    for(let pattern of winPatterns){
        //console.log(pattern);
        //console.log(pattern[0],pattern[1],pattern[2]);
        let pos1Val =  boxes[pattern[0]].innerText;
        let pos2Val =  boxes[pattern[1]].innerText;
        let pos3Val =  boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner!", pos1Val);
                gameover.play();
                showWinner(pos1Val);

            }
        }
    }
}
newBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);