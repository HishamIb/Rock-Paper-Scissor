humanScore = 0;
computerScore = 0;
// Generate a random value on behalf of computer (Starting)
function getComputerChoice(){
    let Random_value = Math.random()
    let computerChoice;
    if (Random_value > 0.1 && Random_value < 0.3){
        computerChoice = "Rock"
    }
    else if(Random_value > 0.3 && Random_value < 0.6){
        computerChoice = "Paper"
    }
    else if(Random_value > 0.6 && Random_value < 0.9){
        computerChoice = "Scissor"
    }
    else if(Random_value == 0){
        computerChoice = "Rock"
    }
    else{
         computerChoice = "Scissor"
    }
    return computerChoice;
}
// Generate a random value on behalf of computer (Starting)

// Player Input Their Choice  (Starting)
function getHumanChoice(){
    let HumanChoice = prompt("Type Rock , Paper or Scissor")
    console.log(HumanChoice);
    return HumanChoice;
}
// Player Input Their Choice  (Ending)