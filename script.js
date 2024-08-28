let displayRoundResult = document.querySelector(".result-display");
let playerScoreDisplay = document.querySelector(".display-game-score")
let playerWins = 0
let machineWins = 0
// Generate a random value on behalf of computer (Starting)
function getComputerChoice(){
    let Random_value = Math.random()
    let computerChoice;
    if (Random_value > 0 && Random_value <= 0.3){
        computerChoice = "ROCK"
    }
    else if(Random_value > 0.3 && Random_value <= 0.6){
        computerChoice = "PAPER"
    }
    else if(Random_value > 0.6 && Random_value <= 1){
        computerChoice = "SCISSOR"
    }
    else if(Random_value == 0){
        computerChoice = "ROCK"
    }
    return computerChoice;
}
// Generate a random value on behalf of computer (Ending)

// code to play a round (starting)
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
                 displayRoundResult.textContent = "You Won"
                 playerWins++

             }
             else{
                 displayRoundResult.textContent = "You Lost"
                 machineWins++
             }
             playerScoreDisplay.textContent = playerWins; 
             if(machineWins == 5){
                displayRoundResult.textContent = "Computer Wins"
                playerScoreDisplay.textContent = 0;
             }
             else if(playerWins == 5){
                displayRoundResult.textContent = "Player Won"
                playerScoreDisplay.textContent = 0;
             }
        }

// code to play a round (ending)

// button feature Ui added (starting)
let buttonRock = document.querySelector(".rock-button") 
let buttonPaper = document.querySelector(".paper-button")
let buttonScissor = document.querySelector(".scissor-button")

buttonRock.addEventListener("click", ()=>{
     let humanChoice = "ROCK"
     let humanEnteredChoice = humanChoice
     let machineGeneratedValue = getComputerChoice()
     playRound(humanEnteredChoice, machineGeneratedValue)
})

buttonPaper.addEventListener("click", ()=>{
    let humanChoice = "PAPER"
    let humanEnteredChoice = humanChoice
    let machineGeneratedValue = getComputerChoice()
    playRound(humanEnteredChoice, machineGeneratedValue)
})

buttonScissor.addEventListener("click", ()=>{
    let humanChoice = "SCISSOR"
    let humanEnteredChoice = humanChoice
    let machineGeneratedValue = getComputerChoice()
    playRound(humanEnteredChoice, machineGeneratedValue)
})
// button feature Ui added (ending)
