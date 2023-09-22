console.log("Hello World!");
let computerChoice = '';
let playerChoice = '';
let playerWins = 0;
let computerWins = 0;
let gameStatement = '';
let gameStatus = '';
let finalStatement = '';
function playerSelection() {
    const takeChoice = Array.from(document.querySelectorAll('.hand'));
    const playerSelectionImage = document.querySelector('.playerSelectedImage');
    takeChoice.forEach(hand => hand.addEventListener('click', (e) => {
        const playerSelectionImageSource = e.target.getAttribute('src');
        playerChoice = e.target.alt;
        console.log("Player :",playerChoice);
        const displayPlayerSelectedImage = new Image();
        displayPlayerSelectedImage.onload = () => {
            displayPlayerSelectedImage.width = 150;
            displayPlayerSelectedImage.height = 150;
            playerSelectionImage.innerHTML = '';
            playerSelectionImage.appendChild(displayPlayerSelectedImage);
        };
        displayPlayerSelectedImage.src = playerSelectionImageSource;
        computerSelection();
        playRound(playerChoice, computerChoice);
        console.log(playerWins);
        console.log(computerWins);
        console.log(gameStatement);
        if(playerWins===3||computerWins===3){
            resetGame();
        }
    }));
}

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function computerSelection() {
    const computerSelectionImage = document.querySelector('.computerSelectedImage');
    const displayComputerSelectedImage = new Image();
    displayComputerSelectedImage.onload = () => {
        displayComputerSelectedImage.width = 150;
        displayComputerSelectedImage.height = 150;
        computerSelectionImage.innerHTML = '';
        computerSelectionImage.appendChild(displayComputerSelectedImage);

    };        
    computerChoice = getComputerChoice();
    console.log("Computer :", computerChoice);
    displayComputerSelectedImage.src = `./images/${computerChoice}.png`;
}
playerSelection(() => {
    console.log("Player :",playerChoice);
    console.log("Computer :", computerChoice);
    console.log("PlayerWins :",playerWins);
    console.log("ComputerWins :", computerWins);
    console.log("gameStatement : ", gameStatement);
});
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        gameStatement = "Play again! It is a tie.";
    } else if ((playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")) {
        playerWins++;
        gameStatement = `You Win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        computerWins++;
        gameStatement = `You Lose! ${computerChoice} beats ${playerChoice}.`;
    }
    updateScoreDisplay();
    updateGameStatement();
}
function resetGame(){
    console.log(`Game completed.`);
    gameStatus = 'Game completed.';
    if(playerWins===3){
        console.log("You Won!");
        finalStatement = 'You Won!';
        playerWins = 0;
        computerWins = 0;
        
    } else {
        console.log("You Lose!");
        finalStatement = 'You Lose!';
        playerWins = 0;
        computerWins = 0;
    }

    updateFinalResult();
}
function updateScoreDisplay() {
    const playerWinsDisplay = document.querySelector('.player-wins');
    const computerWinsDisplay = document.querySelector('.computer-wins');
    playerWinsDisplay.textContent = `Player Wins: ${playerWins}`;
    computerWinsDisplay.textContent = `Computer Wins: ${computerWins}`;
}
function updateGameStatement(){
    const gameStatementDisplay = document.querySelector('.resultGameStatement');
    gameStatementDisplay.textContent = `${gameStatement}`;
}
function updateFinalResult(){
    const finalResultDisplay = document.querySelector('.finalResult');
    finalResultDisplay.textContent = `${gameStatus} ${finalStatement}`;
}
function resetGameScore(){
    computerChoice = '';
    playerChoice = '';
    playerWins = 0;
    computerWins = 0;
    gameStatement = '';
    gameStatus = '';
    finalStatement = '';
    updateScoreDisplay();
    updateGameStatement();
    updateFinalResult();
}
const startAgain  = document.querySelector('.resetScore');
startAgain.addEventListener('click', resetGameScore);