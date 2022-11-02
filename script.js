let choiceList = ["rock", "paper", "scissors"];
let computerChoice = choiceList [Math.floor(Math.random()*choiceList.length)];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return computerChoice;
}

console.log (getComputerChoice());

function playRound (computerSelection = getComputerChoice(), playerSelection = prompt("Please Enter your choice: rock - paper - scissors?"))

{   let playerChoice = playerSelection.toLowerCase();

    if (playerChoice === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        return `computer: ${computerScore}, you: ${playerScore}`;
    } else if (playerChoice === "rock" && computerSelection === "paper") {
        computerScore += 1;
        return `computer: ${computerScore}, you: ${playerScore}`;
    } else if (playerChoice === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        return `computer: ${computerScore}, you: ${playerScore}`;
    } else if (playerChoice === "paper" && computerSelection === "rock") { 
        playerScore += 1;
        return `computer: ${computerScore}, you: ${playerScore}`;
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        return `computer: ${computerScore}, you: ${playerScore}`;
    } else if (playerChoice === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        return `computer: ${computerScore}, you: ${playerScore}`;
    } else {
        computerScore = 0;
        playerScore = 0;
        return `It's a draw! computer: ${computerScore}, you: ${playerScore}`
    }

}

function game() 

{
    for (let numberOfRounds = 0; numberOfRounds < 5; numberOfRounds++) 
    {
        console.log (playRound());
        
    }
} 
