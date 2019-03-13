function StartGamePrompt() {
    this.render = function(dialog, func){
        let winH = window.innerHeight; //to center window
        let promptOverlay = document.getElementById('promptOverlay');
        let promptBox = document.getElementById('promptBox');
        
        // Unhide box and overlay
        promptOverlay.style.display = "block";
        promptOverlay.style.height = winH + "em";
        promptBox.style.display = "block";


        document.getElementById('promptBoxHead').innerHTML = "Setup"
        document.getElementById('promptBoxBody').innerHTML = dialog;
        document.getElementById('promptBoxBody').innerHTML += '<input id="promptValue1" type="text" name="player1" placeholder="Player 1 name">';
        document.getElementById('promptBoxBody').innerHTML += '<input id="promptValue2" type="text" name="player2" placeholder="Player 2 name"><br>';
        document.getElementById('promptBoxBody').innerHTML += '<input id="radioThree" type="radio" name="btnNum" value="3"> 3 &emsp;';
        document.getElementById('promptBoxBody').innerHTML += '<input id="radioFour" type="radio" name="btnNum" value="4"> 4';
        document.getElementById('promptBoxFoot').innerHTML = '<button id="startGame" onclick="Prompt.ok(\''+func+'\')">Start game</button>';
    }
   this.ok = function(func){
        window[func](promptValue1, promptValue2);
        document.getElementById('promptBox').style.display = "none";
        document.getElementById('promptOverlay').style.display = "none";
    }
}