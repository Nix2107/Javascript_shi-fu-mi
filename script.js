let choiceList = ["rock", "paper", "scissors"];
let computerChoice = choiceList [Math.floor(Math.random()*choiceList.length)];

function getComputerChoice() {
    return computerChoice;
}

let computerSelection = (getComputerChoice());

function playRound (computerSelection, playerSelection = prompt ("Enter Rock, Paper, or Scissors", ' ')) 
{   
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beat Paper";
    } else if (playerSelection == "paper" && computerSelection == "rock") { 
        return "You win! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beat paper";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors"
    } else {
        return "It's a draw!"
    }

}