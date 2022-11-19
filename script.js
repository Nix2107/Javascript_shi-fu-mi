/* setting the main variable which will be used in the game */

let computerChoiceList = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 0;

/* selecting the html elements which will be used in-game */

let playerRock = document.querySelector ('#rock');
let playerChoiceRock = playerRock.textContent.toLowerCase();

let playerPaper = document.querySelector ('#paper');
let playerChoicePaper = playerPaper.textContent.toLowerCase();

let playerScissors = document.querySelector ('#scissors');
let playerChoiceScissors = playerScissors.textContent.toLowerCase();

let resultPara = document.querySelector ('#resultp1');
let finalResultPara = document.querySelector ('#resultp2');
const pScorepara = document.querySelector ('#p-scorespan');
const cScorepara = document.querySelector ('#c-scorespan');

/*setting the main mechanics of the game */

function playRoundRock(playerSelection = playerChoiceRock, 
                    computerSelection = computerChoiceList[Math.floor ((Math.random()*3))]) 
{
    numberOfRounds += 1;

    if (playerSelection === computerSelection) 
    {resultPara.textContent = `It's a tie: computer also chose ${computerSelection}`} 
    
    else if (computerSelection === "paper") 
    {resultPara.textContent = `You lost the round: Computer chose ${computerSelection}`
    computerScore += 1}
    
    else if (computerSelection === "scissors")
    {resultPara.textContent = `You win the round: Computer chose ${computerSelection}`
    playerScore += 1}

    cScorepara.textContent = computerScore.toString();
    pScorepara.textContent = playerScore.toString();
}

function playRoundPaper(playerSelection = playerChoicePaper, 
                    computerSelection = computerChoiceList[Math.floor ((Math.random()*3))]) 
{
    numberOfRounds += 1;

    if (playerSelection === computerSelection) 
    {resultPara.textContent = `It's a tie: computer also chose ${computerSelection}`}  

    else if (computerSelection === "scissors")  
    {resultPara.textContent = `You lost the round: computer chose ${computerSelection}`
    computerScore += 1}

    else if (computerSelection === "rock")
    {resultPara.textContent = `You win the round: Computer chose ${computerSelection}`
    playerScore += 1}

    cScorepara.textContent = computerScore.toString();
    pScorepara.textContent = playerScore.toString();
};

function playRoundScissors(playerSelection = playerChoiceScissors, 
                        computerSelection = computerChoiceList[Math.floor ((Math.random()*3))]) 
{
    numberOfRounds += 1;
    
    if (playerSelection === computerSelection)
    {resultPara.textContent = `It's a tie: computer also chose ${computerSelection}`}  
    
    else if (computerSelection === "rock")
    {resultPara.textContent = `You lost the game: computer chose ${computerSelection}`
    computerScore += 1}

    else if (computerSelection === "paper")
    {resultPara.textContent = `You win the round: computer chose ${computerSelection}`
    playerScore += 1}

    cScorepara.textContent = computerScore.toString();
    pScorepara.textContent = playerScore.toString();

};

function endGame() 
{
    if (numberOfRounds === 5)
    {
        if (playerScore === computerScore) 
        {
            finalResultPara.textContent = `Game Over, It's a tie!`;    
        }
        else if (playerScore > computerScore)
        {
            finalResultPara.textContent = `Game Over, Congratulations! You Won!`
        }
        else if (playerScore < computerScore)
        {
            finalResultPara.textContent = `Game Over, Too bad, you lost :(, better luck next time!`
        }
    }    
}
/* Setting the event listeners which will enable us to play a round for every click on a button */
const RockRound = playerRock.addEventListener ('click', () => {playRoundRock (); endGame();})
const PaperRound = playerPaper.addEventListener ('click', ()  => {playRoundPaper (); endGame();})
const ScissorsRound = playerScissors.addEventListener ('click', () => {playRoundScissors(); endGame;})