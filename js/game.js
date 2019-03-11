function victory(player){
    playerName = player.name;
    alert("Gratulerer " + playerName + "! Du har vunnet spillet!");
}
const total = 20; // Temporary

// init global vars
let nimObj;
let player1Button1;
let player1Button2;
let player1Button3;
let player2Button1;
let player2Button2;
let player2Button3;

function getAIAmount(){
    let amount;
    if(nimObj.total < 4){
        amount = nimObj.total;
    } else {
        amount = Math.floor((Math.random() * 3) + 1);
    }
    return amount;
}

//Button click functions
function buttonClickPlayer1(amount){
    if(nimObj.player1.token){
        calculateRemaining(amount);
        nimObj.checkWin(nimObj.player1);
        nimObj.reverseTokens();
        setCurrentPlayer(nimObj.player2.name);
        disableInvalidButtons(nimObj.total);
        if(!nimObj.player2.human){
            let amount = getAIAmount();
            buttonClickPlayer2(amount);
        }
    }
}

function buttonClickPlayer2(amount){
    if(nimObj.player2.token){
        calculateRemaining(amount);
        nimObj.checkWin(nimObj.player2);
        nimObj.reverseTokens();
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
    } if(remainingAmount < 3) {
        player1Button3.disabled = true;
        player2Button3.disabled = true;
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
    
    // Disable buttons if AI
    if(!nimObj.player2.human){
        player2Button1.disabled = true;
        player2Button2.disabled = true;
        player2Button3.disabled = true;
    }
}


// Configure 'Start Game' button
const playerNamesForm = document.getElementById("playerNamesForm");
let startGame = document.getElementById("startGame"); 
startGame.onclick = () => {
    const player1Name = playerNamesForm.elements["player1"].value;
    const player2Name = playerNamesForm.elements["player2"].value; 
    let player2;   
    if(player1Name != "" && player2Name != "") {
        if (player2Name === "AI"){
            player2 = {
                name: "AI",
                human: false
            }
        } else {
            player2 = {
                name: player2Name,
                human: true
            }
        }
    } else if (player1Name != "" && player2Name === "") {
        playerNamesForm.elements["player2"].value = "AI";
        player2 = {
            name: "AI",
            human: false
        }
    } else {
        alert("Player 1 needs a name!")
        throw "Player 1 is missing name"
    }
    const player1 = {
        name: player1Name,
        human: true
    }
    
    // Create game object
    nimObj = new Nim(player1, player2, victory, total);
    
    initGame(nimObj);
}

