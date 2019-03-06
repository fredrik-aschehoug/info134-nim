
//Temporaty game variables
const player1 = {
    name: "Spiller 1",
    human: true
}

const player2 = {
    name: "Spiller 2",
    human: true
}

const victory = () => "Victory";
const total = 25;

// Create game object
const nimObj = new Nim(player1, player2, victory, total);