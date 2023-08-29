console.log("Hello World!");

let playerSelection = prompt("Enter player selection (Rock, Paper, or Scissors):");

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerChoice) {
    let a = playerSelection.toLowerCase();
    let b = computerChoice.toLowerCase();

    if (a === b) {
        return "Play again! It is a tie.";
    } else if ((a === "rock" && b === "scissors") ||
               (a === "paper" && b === "rock") ||
               (a === "scissors" && b === "paper")) {
        return `You Win! ${a} beats ${b}.`;
    } else {
        return `You Lose! ${b} beats ${a}.`;
    }
}

console.log(playRound(playerSelection, getComputerChoice()));
