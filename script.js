function computerPlay() {
    let number = Math.floor(Math.random() * 3);
    let gameArray = ["rock", "paper", "scissors"];
    return gameArray[number]
}

function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}  

function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "It's a tie!"
    }
    if (playerSelection === "rock" && computerSelection ==="scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        return `You Win! ${capitalizeFirst(playerSelection)} beats ${capitalizeFirst(computerSelection)}.`
    }
    return `You Lose! ${capitalizeFirst(computerSelection)} beats ${capitalizeFirst(playerSelection)}.`
}

function game(number) {
    for (i=0;i<number;i++){
        let playerSelection = getUserInput();
        let computerSelection = computerPlay();
        console.log(playGame(playerSelection, computerSelection))
    }
}

function getUserInput() {
    let userInput = window.prompt("Rock, paper, Scissors?");
    userInput = userInput.toLowerCase();
    let gameArray = ["rock", "paper", "scissors"];
    if (!gameArray.includes(userInput)){
        window.alert("Invalid Input")
        userInput = getUserInput();
    }
    return userInput;

}

game(5)