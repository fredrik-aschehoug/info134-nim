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
        body: document.getElementById('promptBoxBody')
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
        this.prompt.body.innerHTML = `
            ${this.dialog}<br><br>
            <input id="promptValue1" type="text" name="player1" size="12" maxlength="12" placeholder="Player 1 name">
            <input id="promptValue2" type="text" name="player2" size="12" maxlength="12" placeholder="Player 2 name"><br><br>
            Number of marbles:
            <form id="radios">
            <label for="radioTwo">2<br/>
            <input id="radioTwo" type="radio" name="btnNum" value="2">
            </label>
            <label for="radioThree">3<br/>
            <input id="radioThree" type="radio" name="btnNum" value="3" checked>
            </label>
            <label for="radioFour">4<br/>
            <input id="radioFour" type="radio" name="btnNum" value="4">
            </label>
            </form><br><br>
            <button id="startGame" onclick="Prompt.startGameButton(${this.func.name}())">Start game</button>
        `;
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