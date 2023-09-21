/*console.log("Hello World!");
let playerWins = 0;
let computerWins = 0;
function game(){
    let i =0;
    for(i = 0;i<5;i++){
        let playerSelection = prompt("Enter player selection (Rock, Paper, or Scissors):");
        console.log(getComputerChoice());
        result = playRound(playerSelection, getComputerChoice());
        console.log(result);
        if (result.includes("You Win")) {
            playerWins++;
        } else if (result.includes("You Lose")) {
            computerWins++;
        }
    }
    if (playerWins>=3 || playerWins>computerWins){
        alert("You win");
    } else {
        alert("You lose");
    }
}

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

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
game();
*/
const takeChoice = Array.from(document.querySelectorAll('.hand'));
const playerSelectionImage = document.querySelector('.playerSelectedImage');

takeChoice.forEach(hand => hand.addEventListener('click', (e) => {
    const playerSelectionImageSource = e.target.getAttribute('src');
    console.log(e.target.alt);
    const displayPlayerSelectedImage = new Image();
    
    displayPlayerSelectedImage.addEventListener('load', () => {
        displayPlayerSelectedImage.width = 150;
        displayPlayerSelectedImage.height = 150;
    });
    
    displayPlayerSelectedImage.src = playerSelectionImageSource;
    playerSelectionImage.innerHTML = '';
    playerSelectionImage.appendChild(displayPlayerSelectedImage);
}));




