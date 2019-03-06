
//Temporaty game variables
const player1 = {
    name: "Spiller 1",
    human: true
}

const player2 = {
    name: "Spiller 2",
    human: true
}

const victory = () => "Victory";
const total = 25;

// Create game object
const nimObj = new Nim(player1, player2, victory, total);

//Button click function
function buttonClick(amount){
    nimObj.makeMove(amount);
    let remaining = document.getElementById("remaining");
    remaining.innerHTML = nimObj.total;
}

function initGame(){
    // replace html placeholders with values from the Nim object
    // set player1 name
    // set player2 name
    // set total amount
    // set remaining amount
    let remaining = document.getElementById("remaining");
    remaining.innerHTML = nimObj.total;



    //Set up listeners
    let player1Button1 = document.getElementById("player1Button1");
    let player1Button2 = document.getElementById("player1Button2");
    let player1Button3 = document.getElementById("player1Button3");
    let player2Button1 = document.getElementById("player2Button1");
    let player2Button2 = document.getElementById("player2Button2");
    let player2Button3 = document.getElementById("player2Button3");

    player1Button1.onclick = () => buttonClick(1);
    player1Button2.onclick = () => buttonClick(2);
    player1Button3.onclick = () => buttonClick(3);
    player2Button1.onclick = () => buttonClick(1);
    player2Button2.onclick = () => buttonClick(2);
    player2Button3.onclick = () => buttonClick(3);
}
initGame();