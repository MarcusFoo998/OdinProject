

let flag = 0;

//Gets a random element from the objects array;
function getComputerChoice() {
    const objects = ["Rock", "Paper", "Scissors"];
    
    var randomItem = objects[Math.floor(Math.random() * objects.length)];

   return(randomItem);
};

function play(userInput, computerSelection) {

    let userGuess=userInput.toLowerCase();
    let compGuess=computerSelection.toLowerCase();

    if((userGuess=="scissors" && compGuess == "paper") || (userGuess == "rock" && compGuess == "scissors") || (userGuess == "paper" && compGuess == "rock")) {
        flag = 1;
        return "Congratulations! You win! " + compGuess;
    } else if ((userGuess=="scissors" && compGuess == "rock") || (userGuess == "rock" && compGuess == "paper") || (userGuess == "paper" && compGuess == "scissors")) {
        flag = 2;
        return "Too bad! You've lost! " + compGuess;
    } else {
        flag = 0;
        return "Darn, it's a draw! Try again! " + compGuess;
    };
};

function game(userInput) {
    let playerSelection = "rock";
    playerSelection = userInput;
    let computerSelection = getComputerChoice();
    let user = 0;
    let computer = 0;

    console.log(play(playerSelection, computerSelection));
        if(flag === 1){
            user++;
            return ("Congrats! You're at " + user + "! The computer is at " + computer);
        } else if(flag === 2) {
            computer++;
            return ("Oh no.. The computer is at " + computer + "! You're at " + user);
        } else {
            return "Don't worry, nothing happened.";
        }

}

function game() {
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    let user = 0;
    let computer = 0;

    console.log(play(playerSelection, computerSelection));
        if(flag === 1){
            user++;
            return ("Congrats! You're at " + user + "! The computer is at " + computer);
        } else if(flag === 2) {
            computer++;
            return ("Oh no.. The computer is at " + computer + "! You're at " + user);
        } else {
            return "Don't worry, nothing happened.";
        }

}

let sign = prompt("Enter one of the three - Rock, Paper, Scissors");
let userAns = sign.toLowerCase();

if(userAns == ("rock" || "paper" || "scissors")) {
 game(userAns);
};

function fiveGames() {
    for(let i=0; i<5; i++){
        game();
    }
    
}


