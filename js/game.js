function victory(player){
    let playerName = player.name;
    if(player.human){
        alert("Congratulations " + playerName + "! You have won the game!");
    } else {
        alert("You lost against the AI...  😒"); 
    }
}

// Generate random text response
const aiText = {
    text: [
        'Deploying algorithm',
        'Calculating optimal move',
        'Running game theory simulations',
        'Contemplating'
    ],
    get response(){
        const randomText = this.text[Math.floor(Math.random() * this.text.length)];
        return randomText + '<span id="wait">.</span>';
    }
};

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
        if(nimObj.player2.human) {
            nimObj.reverseTokens();
            setCurrentPlayer(nimObj.player2.name);
        }
        disableInvalidButtons(nimObj.total);
        
        if(!nimObj.player2.human){
            aiAnimation();
        } 
    }
}

function aiMakeMove(){
    let amount = getAIAmount();
    calculateRemaining(amount);
    nimObj.checkWin(nimObj.player2);
    disableInvalidButtons(nimObj.total);
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

function aiAnimation(){
    let placeholder = document.getElementById("yourTurn");
    tempStorage = placeholder.innerHTML;
    placeholder.innerHTML = aiText.response;
    let dotsInterval = window.setInterval( () => {
        let wait = document.getElementById("wait");
        if ( wait.innerHTML.length > 3 ) 
            wait.innerHTML = "";
        else 
            wait.innerHTML += ".";
    }, 900);
    let timeout = setTimeout( () => { // Wait for 3 seconds
        placeholder.innerHTML = tempStorage;
        clearInterval(dotsInterval);
        aiMakeMove();
    }, 3000);
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
    let remaining = document.getElementById("remaining");
    remaining.innerHTML = nimObj.total;
    setCurrentPlayer(nimObj.player1.name);
    generateButtons(nimObj.maxGrab);
    console.log("running initgame");
    
    // Disable buttons if AI
    if(!nimObj.player2.human){
        player2Button1.disabled = true;
        player2Button2.disabled = true;
        player2Button3.disabled = true;
    }
}
function createNimObject(player1Name, player2Name, victory, total){
    let player2;   
    if(player1Name != "" && player2Name != "") {
        if (player2Name === "AI"){
            player2 = {
                name: "AI",
                human: false
            };
        } else {
            player2 = {
                name: player2Name,
                human: true
            };
        }
    } else if (player1Name != "" && player2Name === "") {
        player2 = {
            name: "AI",
            human: false
        };
    } else {
        alert("Player 1 needs a name!");
        throw "Player 1 is missing name";
    }
    const player1 = {
        name: player1Name,
        human: true
    };
    return new Nim(player1, player2, victory, total);
}

function generateButtons(amount) {
    // Generate html buttons
    // amount is how many buuttons to generate
    for(let i = 1; i <= amount; i++){
        let player1Div = document.getElementById("player1Buttons");
        let player2Div = document.getElementById("player2Buttons");
        let button;
        // Button for player 1
        button = document.createElement("button");
        button.innerHTML = i.toString();
        button.id = "player1Button" + i;
        player1Div.appendChild(button);
        // Event listener
        let player1Button = document.getElementById("player1Button" + i);
        player1Button.onclick = () => buttonClickPlayer1(i);

        // Button for player 2
        button = document.createElement("button");
        button.innerHTML = i.toString();
        button.id = "player2Button" + i;
        player2Div.appendChild(button);
        // Event listener
        let player2Button = document.getElementById("player2Button" + i);
        player2Button.onclick = () => buttonClickPlayer2(i);
    }
}

// Create start game prompt object
let Prompt = new StartGamePrompt('Enter your names:', startDatGame);

// Runs when player clicks on Start game button
function startDatGame() {
    // Get player names from prompt
    const player1Name = document.getElementById('promptValue1').value;
    const player2Name = document.getElementById('promptValue2').value;

    // Generate random total marbles
    const total = Math.floor((Math.random() * 33) + 12);
    
    nimObj = createNimObject(player1Name, player2Name, victory, total);
    // Create game object
    
    console.log("running startdatgame");
    initGame(nimObj);
}