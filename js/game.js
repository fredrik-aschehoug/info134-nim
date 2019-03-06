//Temporaty game variables
const victory = () => "Victory";
const total = 25;

let nimObj;

// Tokens for players. Player needs a valid token to make a move
let player1Token = true;
let player2Token = false;

function reverseTokens(){
    player1Token = !player1Token;
    player2Token = !player2Token;
}

//Button click function
function buttonClickPlayer1(amount){
    if(player1Token){
        buttonClick(amount);
        reverseTokens();
    }
}

function buttonClickPlayer2(amount){
    if(player2Token){
        buttonClick(amount);
        reverseTokens();
    }
}

function buttonClick(amount){
    nimObj.makeMove(amount);
    let remaining = document.getElementById("remaining");
    remaining.innerHTML = nimObj.total;
}

function initGame(nimObj){
    // replace html placeholders with values from the Nim object
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

    player1Button1.onclick = () => buttonClickPlayer1(1);
    player1Button2.onclick = () => buttonClickPlayer1(2);
    player1Button3.onclick = () => buttonClickPlayer1(3);
    player2Button1.onclick = () => buttonClickPlayer2(1);
    player2Button2.onclick = () => buttonClickPlayer2(2);
    player2Button3.onclick = () => buttonClickPlayer2(3);
}

let playerNamesForm = document.getElementById("playerNamesFieldset");

let startGame = document.getElementById("startGame");
startGame.onclick = () => {
    const player1Name = playerNamesForm.elements["player1"].value;
    const player2Name = playerNamesForm.elements["player2"].value;
    
    const player1 = {
        name: player1Name,
        human: true
    }
    
    const player2 = {
        name: player2Name,
        human: true
    }
    // Create game object
    nimObj = new Nim(player1, player2, victory, total);
    
    initGame(nimObj);
}

