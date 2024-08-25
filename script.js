
// Generate a random value on behalf of computer (Starting)
function getComputerChoice(){
    let Random_value = Math.random()
    let computerChoice;
    if (Random_value > 0.1 && Random_value < 0.3){
        computerChoice = "ROCK"
    }
    else if(Random_value > 0.3 && Random_value < 0.6){
        computerChoice = "PAPER"
    }
    else if(Random_value > 0.6 && Random_value < 0.9){
        computerChoice = "SCISSOR"
    }
    else if(Random_value == 0){
        computerChoice = "ROCK"
    }
    else{
         computerChoice = "SCISSOR"
    }
    return computerChoice;
}
// Generate a random value on behalf of computer (Starting)

// Player Input Their Choice  (Starting)
function getHumanChoice(){
    let humanChoice = prompt("Type Rock , Paper or Scissor")
    humanChoice = humanChoice.toUpperCase()
    return humanChoice
}
// Player Input Their Choice  (Ending)

function playGame(){
    
    let i = 0;
    computerWinner = 0;
    playerWinner = 0;
    for(i=0;i<5;i++){
         // Play a Round Code (Starts)
         const humanEnteredValue = getHumanChoice()
         const machineGeneratedValue = getComputerChoice()
         playRound(humanEnteredValue, machineGeneratedValue)
         function playRound(humanChoice, computerChoice){
            let humanScore = 0;
            let computerScore = 0;
             if (humanChoice == "ROCK"){
                 switch(computerChoice){
                     case "PAPER":
                         computerScore++
                         break;
                     case "ROCK":
                         break;
                     case "SCISSOR":
                         humanScore++
                         break;
                 }
             }
             else if (humanChoice == "PAPER"){
                 switch(computerChoice){
                     case "PAPER":
                         break;
                     case "ROCK":
                         humanScore++
                         break;
                     case "SCISSOR":
                         computerScore++
                         break;
                 }
             }
             else if (humanChoice == "SCISSOR"){
                 switch(computerChoice){
                     case "PAPER":
                         humanScore++
                         break;
                     case "ROCK":
                         computerScore++
                         break;
                     case "SCISSOR":
                         break;
                 }
             }
             if (humanScore > computerScore){
                 console.log("You Won")
                 playerWinner++
             }
             else{
                 console.log("You Lost")
                 computerWinner++
             }
             
         }
    }
    if (playerWinner > computerWinner){
        console.log("You Won The Game")
    }
    else{
        console.log("You Lost The Game")
    }
}           

