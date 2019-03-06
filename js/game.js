//Temporaty game variables
function victory(player){
    playerName = player.name;
    alert("Gratulerer " + playerName + "! Du har vunnet spillet!");
}
const total = 5;

// init global vars
let nimObj;

let player1Button1;
let player1Button2;
let player1Button3;
let player2Button1;
let player2Button2;
let player2Button3;

// Tokens for players. Player needs a valid token to make a move
let player1Token = true;
let player2Token = false;

function reverseTokens(){
    player1Token = !player1Token;
    player2Token = !player2Token;
}

//Button click functions
function buttonClickPlayer1(amount){
    if(player1Token){
        calculateRemaining(amount);
        checkWin(nimObj.player1)
        reverseTokens();
        setCurrentPlayer(nimObj.player2.name);
        disableInvalidButtons(nimObj.total);
    }
}

function buttonClickPlayer2(amount){
    if(player2Token){
        calculateRemaining(amount);
        checkWin(nimObj.player2)
        reverseTokens();
        setCurrentPlayer(nimObj.player1.name);
        disableInvalidButtons(nimObj.total);
    }
}

function calculateRemaining(amount){
    nimObj.makeMove(amount);
    let remaining = document.getElementById("remaining");
    remaining.innerHTML = nimObj.total;
}

function setCurrentPlayer(playerName) {
    let currentPlayer = document.getElementById("currentPlayer");
    currentPlayer.innerHTML = playerName;
}

function disableInvalidButtons(remainingAmount) {
    if(remainingAmount < 2) {
        player1Button2.disabled = true;
        player2Button2.disabled = true;
    } else if(remainingAmount < 3) {
        player1Button3.disabled = true;
        player2Button3.disabled = true;
    } 
    
}

function checkWin(player) {
    if(nimObj.total === 0){
        nimObj.victory(player)
    }
}

function initGame(nimObj){
    // replace html placeholders with values from the Nim object
    // set total amount
    // set remaining amount
    let remaining = document.getElementById("remaining");
    remaining.innerHTML = nimObj.total;

    //Set up listeners
    player1Button1 = document.getElementById("player1Button1");
    player1Button2 = document.getElementById("player1Button2");
    player1Button3 = document.getElementById("player1Button3");
    player2Button1 = document.getElementById("player2Button1");
    player2Button2 = document.getElementById("player2Button2");
    player2Button3 = document.getElementById("player2Button3");

    player1Button1.onclick = () => buttonClickPlayer1(1);
    player1Button2.onclick = () => buttonClickPlayer1(2);
    player1Button3.onclick = () => buttonClickPlayer1(3);
    player2Button1.onclick = () => buttonClickPlayer2(1);
    player2Button2.onclick = () => buttonClickPlayer2(2);
    player2Button3.onclick = () => buttonClickPlayer2(3);

    setCurrentPlayer(nimObj.player1.name);
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

