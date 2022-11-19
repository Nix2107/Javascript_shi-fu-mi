/* setting the main variable which will be used in the game */

let computerChoiceList = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let roundsLeft = 5;

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

let restartButton = document.querySelector ('#restartbtn');
restartButton.disabled = true;

/*setting the main mechanics of the game */

function playRoundRock(playerSelection = playerChoiceRock, 
                    computerSelection = computerChoiceList[Math.floor ((Math.random()*3))]) 
{
    roundsLeft -= 1;

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
    roundsLeft -= 1;

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
    roundsLeft -= 1;
    
    if (playerSelection === computerSelection)
    {resultPara.textContent = `It's a tie: computer also chose ${computerSelection}`}  
    
    else if (computerSelection === "rock")
    {resultPara.textContent = `You lost the round: computer chose ${computerSelection}`
    computerScore += 1}

    else if (computerSelection === "paper")
    {resultPara.textContent = `You win the round: computer chose ${computerSelection}`
    playerScore += 1}

    cScorepara.textContent = computerScore.toString();
    pScorepara.textContent = playerScore.toString();

};

function endGame() 
{
    if (roundsLeft === 0)
    {
        if (playerScore === computerScore) 
        {
            finalResultPara.textContent = `Game Over, It's a tie!`;    
        }
        else if (playerScore > computerScore)
        {
            finalResultPara.textContent = `Game Over, Congratulations! You Won!`;
        }
        else if (playerScore < computerScore)
        {
            finalResultPara.textContent = `Game Over, Too bad, you lost :( better luck next time!`;
        }

        playerRock.disabled = true;
        playerPaper.disabled = true;
        playerScissors.disabled = true;
        restartButton.disabled = false;
    }    
}
/* Setting the event listeners which will enable us to play a round for every click on a button */
const RockRound = playerRock.addEventListener ('click', () => {playRoundRock (); endGame();});
const PaperRound = playerPaper.addEventListener ('click', ()  => {playRoundPaper (); endGame();});
const ScissorsRound = playerScissors.addEventListener ('click', () => {playRoundScissors (); endGame ();});
/*setting up a restart button to be able to restart the game after 5 rounds*/
const gameRestart = restartButton.addEventListener ('click', () => {playerScore = 0;
                                                                    computerScore = 0;
                                                                    numberOfRounds = 0;
                                                                    restartButton.disabled = true;
                                                                    playerRock.disabled = false;
                                                                    playerPaper.disabled = false;
                                                                    playerScissors.disabled = false;
                                                                    cScorepara.textContent = computerScore.toString();
                                                                    pScorepara.textContent = playerScore.toString();
                                                                    resultPara.textContent = "";
                                                                    finalResultPara.textContent = "";})