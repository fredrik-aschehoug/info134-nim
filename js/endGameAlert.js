/*function EndGameAlert() {
    //this.dialog = dialog;
    //this.func = func;
    this.render = function(playerName){
        let winH = window.innerHeight; //to center window
        let alertOverlay = document.getElementById('alertOverlay');
        let alertBox = document.getElementById('alertBox');
        
        // Unhide box and overlay
        alertOverlay.style.display = "block";
        alertOverlay.style.height = winH + "em";
        alertBox.style.display = "block";


        document.getElementById('alertBoxHead').innerHTML = "Congratulations " + playerName + "! You have won the game!";
        //document.getElementById('alertBoxBody').innerHTML = this.dialog;
        document.getElementById('alertBoxBody').innerHTML += "Click or Push for New Game"
        document.getElementById('alertBoxFoot').innerHTML = '<button id="startGame"><a href="nim.html">New Game</a></button>'
        document.getElementById('alertBoxFoot').innerHTML += '<button id="startGame" onclick="Alert.retry(' + this.func.name + '())">Retry</button>'; //'<button id="startGame" onclick="Alert.tryAgain(' + this.func.name + '())">Try Again</button>';
        //document.getElementById('alertBoxBody').innerHTML += '<input id="promptValue2" type="text" name="player2" placeholder="Player 2 name"><br>';
       // document.getElementById('alertBoxBody').innerHTML += '<input id="radioThree" type="radio" name="btnNum" value="3"> 3 &emsp;';
        //document.getElementById('alertBoxBody').innerHTML += '<input id="radioFour" type="radio" name="btnNum" value="4"> 4';
        //document.getElementById('alertBoxFoot').innerHTML = '<button id="startGame" onclick="Alert.newGame(' + this.func.name + '())">Try Again</button>';
        
    };
    this.AIrender = function(){
        let winH = window.innerHeight; //to center window
        let alertOverlay = document.getElementById('alertOverlay');
        let alertBox = document.getElementById('alertBox');
        
        // Unhide box and overlay
        alertOverlay.style.display = "block";
        alertOverlay.style.height = winH + "em";
        alertBox.style.display = "block";


        document.getElementById('alertBoxHead').innerHTML = "You lost against the AI...  😒";
        document.getElementById('alertBoxBody').innerHTML = "Click or Push for New Game";
        document.getElementById('alertBoxFoot').innerHTML += '<button><a href="nim.html">New Game</a></button>'
        //document.getElementById('alertBoxFoot').innerHTML = '<button>Test</button>' //'<button id="startGame" onclick="Alert.tryAgain(' + this.func.name + '())">Try Again</button>';

    }
   this.retry = function(){
        //window[this.func.name](promptValue1, promptValue2);
        document.getElementById('alertBox').style.display = "none";
        document.getElementById('alertOverlay').style.display = "none";
    };
}

          <div class=namemarbles>
              <div id="alertOverlay">

              <li id="alertBox">
                  <ul id="alertBoxHead"></ul>
                  <ul id="alertBoxBody"></ul>
                  <ul id="alertBoxFoot"></ul>

              </li>
              </div>
          </div>

          

function victory(player){
    let playerName = player.name;
    if(player.human){
        Alert.render(playerName);
    } else {
        Alert.AIrender();
    }
}*/