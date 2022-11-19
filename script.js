/* setting the function for getting the computer's choice */

let computerChoiceList = ["rock", "paper", "scissors"];
let computerChoice =  computerChoiceList[Math.floor ((Math.random()*10*3))];
function getComputerChoice()
{
    return computerChoice;
};
