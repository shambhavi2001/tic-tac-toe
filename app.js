const boxes= Array.from(document.getElementsByClassName('box'));
const O_TEXT="O";
const X_TEXT="X";
const playText=document.getElementById('playText')
const spaces=[null, null, null, null, null, null, null, null, null]
let currentPlayer=O_TEXT;


console.log(boxes);

const drawBoard = () => {
    boxes.forEach((box, index) => {
      let styleString = "";
      if (index < 3) {
        styleString += 'border-bottom: 3px solid pink;';
      }
      if (index % 3 === 0) {
        styleString += 'border-right: 3px solid pink;';
      }
      if (index % 3 === 2) {
        styleString += 'border-left: 3px solid pink;';
      }
      if (index > 5) {
        styleString += 'border-top: 3px solid pink;';
      }
      box.style = styleString;
      box.addEventListener('click', boxClicked)
    });
};

const boxClicked=(e)=>{
    const id=e.target.id;
    console.log(id);
    if(!spaces[id]){
        spaces[id]=currentPlayer;
        e.target.innerText = currentPlayer;
        if(playerWon()){
            if(currentPlayer==O_TEXT){
                playText.innerText = 'O has won!';
                return;
            }
            if(currentPlayer==X_TEXT){
                playText.innerText = 'X has won!';
                return;
            }
        }
        currentPlayer=currentPlayer===O_TEXT?X_TEXT:O_TEXT;
    }
};
const playerWon=()=>{
    const allsolutions=[[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9],[3,5,7]];
    for(let i=0; i<allsolutions.length; i++){
        var solution=allsolutions[i];
        if (spaces[solution[0]]==currentPlayer && spaces[solution[1]]==currentPlayer && spaces[solution[2]]==currentPlayer){
            return true;
        }
    }

restart=function(){
    location.reload();
}

};
drawBoard();