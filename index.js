// connect html/js

const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")
const playerEl = document.getElementById("player-el")
const computerEl = document.getElementById("computer-el")
const winnerEl = document.getElementById("winner-el")
const playerWinsEl = document.getElementById("player-wins-el")
const computerWinsEl = document.getElementById("computer-wins-el")
let playerWins = 0
let computerWins = 0

// take the users choice and store in a variable

let playerSelection = ""

rockBtn.addEventListener("click",function() {
    playerSelection = "rock"

    //highlight selection
    rockBtn.style.background = "yellow"
    paperBtn.style.background = "none"
    scissorsBtn.style.background = "none"

})

paperBtn.addEventListener("click",function() {
    playerSelection = "paper"

    //highlight selection
    rockBtn.style.background = "none"
    paperBtn.style.background = "yellow"
    scissorsBtn.style.background = "none"

})

scissorsBtn.addEventListener("click",function() {
    playerSelection = "scissors"

    //highlight selection
    rockBtn.style.background = "none"
    paperBtn.style.background = "none"
    scissorsBtn.style.background = "yellow"

})

// computer is assigned a random choice 
    //(0,1,2 - rock paper scissors)

function computer() {
    let computerNumber = Math.floor(Math.random()*3)
    switch (computerNumber) {
        case 0:
            computerSelection = "rock"
            break;
        case 1:
            computerSelection = "paper"
            break;
        case 2:
            computerSelection = "scissors"
    }
}

//run game with assigned variables


function startGame() {
    if(playerSelection){
    computer()
    renderGame()
    determineWinner()
} else {
    alert("You haven't made your selection")
}

}

// render player and computer selection on screen

function renderGame() {
    playerEl.innerHTML = `Player: ${playerSelection}`
    computerEl.innerHTML = `Computer: ${computerSelection}`
    console.log(playerEl.innerHTML)
}

// determine winner and calculate wins

function determineWinner() {
    if (playerSelection === computerSelection) {
        let winner = "tie"
        winnerEl.innerHTML = "Its a tie!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        let winner = "Player"
        winnerEl.innerHTML = `Winner is ${winner}`
        playerWins ++
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        let winner = "Player"
        winnerEl.innerHTML = `Winner is ${winner}`
        playerWins ++
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        let winner = "Player"
        winnerEl.innerHTML = `Winner is ${winner}`
        playerWins ++
    } else {
        let winner = "Computer"
        winnerEl.innerHTML = `Winner is ${winner}`
        computerWins ++
    }

    playerWinsEl.innerHTML = `Player Wins: ${playerWins}`
    computerWinsEl.innerHTML = `Computer Wins: ${computerWins}`

}
