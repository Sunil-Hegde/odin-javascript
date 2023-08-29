console.log("Hello World!");

let playerSelection = prompt("Enter player selection(Rock, Paper or Scissors):");

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerChoice) {
    let a = playerSelection.toLowerCase();
    let b = computerChoice.toLowerCase();

    switch (a) {
        case "rock":
            if (b === "rock") {
                return "Play again! It is a tie.";
            } else if (b === "paper") {
                return "You Lose! Paper beats Rock.";
            } else if (b === "scissors") {
                return "You Win! Rock beats Scissors.";
            }
            break;
        case "paper":
            if (b === "paper") {
                return "Play again! It is a tie.";
            } else if (b === "rock") {
                return "You Win! Paper beats Rock.";
            } else if (b === "scissors") {
                return "You Lose! Scissors beats Paper.";
            }
            break;
        case "scissors":
            if (b === "scissors") {
                return "Play again! It is a tie.";
            } else if (b === "rock") {
                return "You Lose! Rock beats Scissors.";
            } else if (b === "paper") {
                return "You Win! Scissors beats Paper.";
            }
            break;
    }
}

console.log(playRound(playerSelection, getComputerChoice()));
