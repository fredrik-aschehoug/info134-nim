function victory(player){
    let playerName = player.name;
    if(player.human){
        Alert.render(playerName);
    } else {
        Alert.AIrender();
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
// Return amount for AI to grab
function getAIAmount(){
    let amount;
    switch(nimObj.maxGrab){
        case 4:
            if(nimObj.total <= 4){
                amount = nimObj.total;
            } else {
                amount = Math.floor((Math.random() * 4) + 1);
            }
            break;
        case 3:
            if(nimObj.total <= 3){
                amount = nimObj.total;
            } else {
                amount = Math.floor((Math.random() * 3) + 1);
            }
            break;
        case 2:
            if(nimObj.total <= 2){
                amount = nimObj.total;
            } else {
                amount = Math.floor((Math.random() * 2) + 1);
            }
            break;
    }
    return amount;
}

//Button click functions
function buttonClickPlayer1(amount){
    if(nimObj.player1.token){
        calculateRemaining(amount);
        nimObj.checkWin(nimObj.player1);
        nimObj.reverseTokens();
        if(nimObj.player2.human) {
            setCurrentPlayer(nimObj.player2.name);
        }
        disableInvalidButtons(nimObj.total);
        
        if(!nimObj.player2.human){
            aiAnimation();
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

function aiMakeMove(){
    let amount = getAIAmount();
    calculateRemaining(amount);
    nimObj.checkWin(nimObj.player2);
    nimObj.reverseTokens();
    disableInvalidButtons(nimObj.total);
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
// Disable buttons larger than maxGrab
function disableInvalidButtons(remainingAmount) {
    let player1Buttons = document.getElementById("player1Buttons").childNodes;
    let player2Buttons = document.getElementById("player2Buttons").childNodes;
    if(remainingAmount < 2) {
        player1Buttons[1].disabled = true;
        player2Buttons[1].disabled = true;
    } if(remainingAmount < 3 && (nimObj.maxGrab == 3 || nimObj.maxGrab == 4)) {
        player1Buttons[2].disabled = true;
        player2Buttons[2].disabled = true;
    } if(remainingAmount < 4 && nimObj.maxGrab == 4){
        player1Buttons[3].disabled = true;
        player2Buttons[3].disabled = true;
    }
}

function initGame(nimObj){
    let remaining = document.getElementById("remaining");
    remaining.innerHTML = nimObj.total;
    setCurrentPlayer(nimObj.player1.name);
    generateButtons(nimObj.maxGrab);
    // Disable buttons if AI
    if(!nimObj.player2.human){
        let aiButtons = document.getElementById("player2Buttons").childNodes;
        for(let i = 0; i < aiButtons.length; i++)
        aiButtons[i].disabled = true;
    }
}

function createNimObject(player1Name, player2Name, victory, total, buttonAmount){
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
    return new Nim(player1, player2, victory, total, buttonAmount);
}

function generateButtons(amount) {
    // Generate html buttons
    // amount is how many buttons to generate
    let player1Div = document.getElementById("player1Buttons");
    let player2Div = document.getElementById("player2Buttons");
    let button;
    for(let i = 1; i <= amount; i++){
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
// Bound to body onload
let Prompt = new StartGamePrompt('<br>Enter your names:', startGame);
let Alert = new EndGameAlert();

// Runs when player clicks on Start game button
function startGame() {
    // Get player names from prompt
    const player1Name = document.getElementById('promptValue1').value;
    const player2Name = document.getElementById('promptValue2').value;
    let radios = document.forms.namedItem("radios");
    let buttonAmount;
    for(let i = 0; i < radios.length; i++){
        if(radios[i].checked) {
            buttonAmount = radios[i].value;
        }
    }
    buttonAmount = parseInt(buttonAmount); // Convert string to int

    // Generate random total marbles
    const total = Math.floor(Math.random() * (35 - 12) + 12); //Int between 12 and 35
    // Create game object
    nimObj = createNimObject(player1Name, player2Name, victory, total, buttonAmount);

    initGame(nimObj);
}