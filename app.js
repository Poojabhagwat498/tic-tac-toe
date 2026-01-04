let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;//player0 playerX

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame = () => {
    turn0 = true;
    enabledBoxes();
msgcontainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",() => {
                if(turn0){
            box.innerText ="0";
            turn0 = false;//player0
        } else {
            
        box.innerText ="X"; 
        turn0 = true; //playerX  
         }
         box.disabled = true;
         checkWinner()
   })
});
const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled =true;
    }
};
const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled =false;
        box.innerText ="";
    }
};
const showWinner = (winner) => {
    msg.innerText = `congratulation,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
};

const checkWinner = () => {
    for(pattern of winPatterns){
        console.log(
            boxes [pattern[0]].innerText,
            boxes [pattern[1]].innerText,
            boxes [pattern[2]].innerText
            );
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" &&  pos2Val != "" && pos3Val != "" )
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);

            }
        }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetbtnBtn.addEventListener("click",resetGame);

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

