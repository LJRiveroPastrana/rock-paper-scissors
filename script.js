
let humanScore = 0;
let computerScore = 0;



/* funcion computer choice*/
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "unknown"; 
  }
}



/*FIN getComputerChoice*/

/*funcion human choice */
function getHumanChoice() {
  
    const humanChoice = prompt("Choose your option: rock, paper, scissors").toLowerCase()
    return humanChoice
}

/*FIN getHumanChoice*/

function playRound(humanChoice,computerChoice) {
   
    if (humanChoice === computerChoice) {
        return "tie"
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "human win"
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return "human win"
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "human win"
    } else {
        return "computer win"
    }
}                




function score(resultRound) {
    if (resultRound === "human win") {
        humanScore++;
        console.log("¡Human win this round!");
    } else if (resultRound === "computer win") {
        computerScore++;
        console.log("Computer win this round.");
    } else {
        console.log("¡It's a tie!");
    }
}


function playGame() {
    for (let index = 0; index < 5; index++) {
        console.log(`--- Round ${index + 1} ---`);
        
        const computerChoice = getComputerChoice();
        console.log("Computer:", computerChoice);
        const humanChoice = getHumanChoice();
        console.log("Human:", humanChoice);
        const result = playRound(humanChoice, computerChoice);
        
        score(result);       
                
    }
    showResult(humanScore,computerScore) 
}
playGame()


function showResult(humanScore,computerScore) {
    if (humanScore > computerScore) {
        console.log("-------------------")
        console.log("Human is the winner")
    } else if(computerScore  > humanScore){
        console.log("-------------------")
        console.log("Computer is the winner")
    }else{
        console.log("-------------------")
        console.log("draw")
    }
    
}