let ChoiceList = ["rock", "paper", "scissors"];
let computerSelection = ChoiceList [Math.floor(Math.random()*ChoiceList.length)];
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

function getComputerChoice ()
{
    return computerSelection;
}

console.log (getComputerChoice());

function playRound (computerSelection = getComputerChoice(), playerSelection)

{  
    roundNumber += 1

    if (playerSelection === "scissors" && computerSelection === "rock") 
    {
        computerScore += 1;
        return `You lost the round! current score is 
        computer: ${computerScore}
        you: ${playerScore}`;

    } else if (playerSelection === "rock" && computerSelection === "paper") 
    {
        computerScore += 1;
        return `You lost the round! current score is 
        computer: ${computerScore}
        you: ${playerScore}`;

    } else if (playerSelection === "paper" && computerSelection === "scissors") 
    {
        computerScore += 1;
        return `You lost the round! current score is 
        computer: ${computerScore}
        you: ${playerScore}`;

    } else if (playerSelection === "paper" && computerSelection === "rock") 
    { 
        playerScore +=1;
        return `You won the round! current score is 
        computer: ${computerScore}
        you: ${playerScore}`;

    } else if (playerSelection === "scissors" && computerSelection === "paper") 
    {
        playerScore += 1;
        return `You won the round! current score is 
        computer: ${computerScore}
        you: ${playerScore}`;

    } else if (playerSelection === "rock" && computerSelection === "scissors") 
    {   
        playerScore +=1;
        return `You won the round! current score is 
        computer: ${computerScore}
        you: ${playerScore}`;

    } else 
    {
        return `It's a draw! current score is 
        computer: ${computerScore}
        you: ${playerScore}`;
        
    }

};

function endGame() 
{
    if (playerScore < computerScore) 
    {
        return `You lost the game :( your score is ${playerScore}, and computer's score is ${computerScore}`;   
    } else if (playerScore > computerScore)
    {
        return `You win the game :) your score is ${playerScore}, and computer's score is ${computerScore}`;
    } else if (playerScore === computerScore)
    {
        return `It's a draw! you have the same score as the computer`;
    }
    
}

const scorepara = document.querySelector ("#scorep");
const resultpara = document.querySelector ("#resultp");

const playerChoiceRock = document.querySelector ("#rock");
playerChoiceRock.addEventListener ('click', () => {
    scorepara.textContent = playRound(computerSelection, "rock")
    if (roundNumber === 5) {resultpara.textContent = endGame () }});

const playerChoicePaper = document.querySelector ("#paper");
playerChoicePaper.addEventListener ('click', () => {
    scorepara.textContent = playRound(computerSelection, "paper")
    if (roundNumber === 5) {resultpara.textContent = endGame () }});

const playerChoiceScissors = document.querySelector ("#scissors");
playerChoiceScissors.addEventListener ('click', () => {
    scorepara.textContent = playRound(computerSelection, "scissors")
    if (roundNumber === 5) {resultpara.textContent = endGame () }});
