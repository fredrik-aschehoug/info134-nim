//Nim constructor
function Nim(player1, player2, victory, total, maxGrab){
    this.player1 = player1;
    this.player2 = player2;
    this.victory = victory;
    this.total = total;
    this.maxGrab = maxGrab || 3;
    this.makeMove = function(grabAmount){
        this.total -= grabAmount;
    }
}


