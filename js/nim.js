//Nim constructor
function Nim(player1, player2, victory, total, maxGrab){
    // Error handling
    if(maxGrab < 2 || maxGrab > 4) {
        throw "‘maxGrab’ must be between 2 and 4";
    }
    if(player1.name == undefined || player1.human == undefined){
        throw "'player1' is missing a value in name or human";
    }
    if(player2.name == undefined || player2.human == undefined){
        throw "'player2' is missing a value in name or human";
    }
    if(total < 12){
        throw "'total' must be at least 12";
    }

    // Set properties
    this.player1 = player1;
    this.player2 = player2;
    this.victory = victory;
    this.total = total;
    this.maxGrab = maxGrab || 3;
    // Tokens for players. Player needs a valid token to make a move
    this.player1.token = true;
    this.player2.token = false;

    // Methods
    this.makeMove = function(grabAmount){
        this.total -= grabAmount;
    };
    this.reverseTokens = function(){
        this.player1.token = !this.player1.token;
        this.player2.token = !this.player2.token;
    };  
    this.checkWin = function(player) {
        if(this.total === 0){
            this.victory(player);
        }
    }
}

// Oppgave 2.1 og 2.2 er løst i denne filen
