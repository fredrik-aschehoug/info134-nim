function EndGameAlert() {
    //DOM elements
    this.yourTurnElement = document.getElementById("yourTurn");
    this.remainingElement = document.getElementById("remaining");
    this.alert = {
        overlay: document.getElementById('alertOverlay'),
        box: document.getElementById('alertBox'),
        body: document.getElementById('alertBoxBody')
    };    
    // Methods
    this.render = function(playerName){
        let winH = window.innerHeight; //to center window
        // Hide game elements
        this.yourTurnElement.style.visibility = "hidden";
        this.remainingElement.style.visibility = "hidden";
        
        // Show box and overlay
        this.alert.overlay.style.display = "block";
        this.alert.overlay.style.height = winH + "em";
        this.alert.box.style.visibility = "visible";

        // Create alert
        this.alert.body.innerHTML = `
            Game Over!<br><br>
            ${playerName} wins!<br><br>
            <a href="nim.html" style="text-decoration: none;"><button id="startGame" style="text-decoration: none;">New Game</button></a>
            `;
        
    };
    this.AIrender = function(){
        let winH = window.innerHeight; //to center window
        // Hide game elements
        this.yourTurnElement.style.visibility = "hidden";
        this.remainingElement.style.visibility = "hidden";
        
        // Hide game elements
        this.alert.overlay.style.display = "block";
        this.alert.overlay.style.height = winH + "em";
        this.alert.box.style.visibility = "visible";

        this.alert.body.innerHTML = `
            Game Over!<br><br>
            You lost against the AI...  😒<br><br>
            
            <a href="nim.html" style="text-decoration: none;"><button id="startGame" style="text-decoration: none;">New Game</button></a>
            `;
    };
}