function getComputerChoice() {
    let choiceList = ["rock", "paper", "scissors"];
    let computerChoice = choiceList [Math.floor(Math.random()*choiceList.length)];
    return computerChoice;
}