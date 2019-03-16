function StartGamePrompt(dialog, func) {
    // Parameters
    this.dialog = dialog;
    this.func = func;
    // DOM elements
    this.yourTurnElement = document.getElementById("yourTurn");
    this.remainingElement = document.getElementById("remaining");
    this.prompt = {
        overlay: document.getElementById('promptOverlay'),
        box: document.getElementById('promptBox'),
        head: document.getElementById('promptBoxHead'),
        body: document.getElementById('promptBoxBody'),
        foot: document.getElementById('promptBoxFoot')
    };
    // Methods
    this.render = function(){
        let winH = window.innerHeight; //to center window 
        // Hide game elements
        this.yourTurnElement.style.visibility = "hidden";
        this.remainingElement.style.visibility = "hidden";
        // Show box and overlay
        this.prompt.overlay.style.display = "block";
        this.prompt.overlay.style.height = winH + "em";
        this.prompt.box.style.display = "block";
        // Create prompt
        this.prompt.head.innerHTML = "Setup";
        this.prompt.body.innerHTML = `
            ${this.dialog}<br>
            <input id="promptValue1" type="text" name="player1" placeholder="Player 1 name">
            <input id="promptValue2" type="text" name="player2" placeholder="Player 2 name"><br>
            <form id="radios">
            <input id="radioTwo" type="radio" name="btnNum" value="2"> 2 &emsp;
            <input id="radioThree" type="radio" name="btnNum" value="3" checked> 3 &emsp;
            <input id="radioFour" type="radio" name="btnNum" value="4"> 4
            </form><br>
            <button id="startGame" onclick="Prompt.startGameButton(${this.func.name}())">Start game</button>
        `;
        this.prompt.foot.innerHTML = '';
    };
   this.startGameButton = function(){
        // Hide prompt
        this.prompt.box.style.display = "none";
        this.prompt.overlay.style.display = "none";
        // Show game elements
        this.yourTurnElement.style.visibility = "visible";
        this.remainingElement.style.visibility = "visible";
    };
}