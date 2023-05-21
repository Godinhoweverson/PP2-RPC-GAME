'use strict';

// Get all attribute that will be used and store in Variable

const btnReset = document.querySelector('#btn-reset');
const message = document.querySelector('h1');
const imagePlayer = document.querySelector('#image--player');
const imageComputer = document.querySelector('#image--computer');
const btnsBox = document.querySelectorAll('.btn-box');
const scorePlayer = document.querySelector('#score-player');
const scoreComputer = document.querySelector('#score-computer');

//Computer choice
const computerChoice = ['rock', 'paper', 'scissors'];

let computer;
let player;

//// Add a click event listener to the reset button
btnReset.addEventListener('click', function () {
    resetBtn();
});

/**
 * The loop iterating over a collection of buttons with the variable name "buttons" representing each button in the collection. 
 * It seems to be adding an event listener to each button, 
 * specifically listening for a 'click' event. When a button is clicked, the code inside the function will be executed.
 */
for (let buttons of btnsBox) {
    buttons.addEventListener('click', function () {
        // Get the data-choice attribute from the click button, the data is "rock = 0, paper= 1, scissors= 2"
        let itens = this.getAttribute('data-choice');

        // Call the gameStepUp function with the obtained value
        gameSteUp(itens);

    });
}


/**
 * Set up the game by displaying images for the computer and player.
 * @param {paramenter} itens  = The value obtained from the clicked button's data-choice attribute.
 */
function gameSteUp(itens) {

    // Generate a random number between 0 and 2    
    let randomNumber = Math.floor(Math.random() * 3);

    //Set  the source imageComputer based on the array[random index between 0 and 2]
    imageComputer.src = `assets/images/${computerChoice[randomNumber]}.png`;

    // Set the source imagePlayer based on data-choice
    imagePlayer.src = `assets/images/${computerChoice[itens]}.png`;



    // Assign the computer and player choices based on the randomly generated number and player choices.
    computer = computerChoice[randomNumber];
    player = computerChoice[itens];


    //if statement checks the different combinations of choices (rock, paper, scissors) between the player and the computer. 

    if (player === computer) {
        message.textContent = 'Draw!';
        // If both choices are the same, it's a draw

    } else if (player === 'rock' && computer === 'scissors') {
        message.textContent = 'Player win!';
        scorePlayer.textContent++;
        winner();

        // If the player chooses rock and the computer chooses scissors, the player wins.

    } else if (player === 'scissors' && computer === 'paper') {
        message.textContent = 'Player win!';
        scorePlayer.textContent++;
        winner();
        // If the player chooses scissors and the computer chooses paper, the player wins


    } else if (player === 'paper' && computer === 'rock') {
        message.textContent = 'Player win!';
        scorePlayer.textContent++;
        winner();
        // If the player chooses paper and the computer chooses rock, the player wins


    } else {
        message.textContent = 'Computer win!';
        scoreComputer.textContent++;
        winner();
        // In all other cases, the computer wins

    }

}

/**
 * Check for a winner based on the current scores.
 * If a player or computer reaches a score of 3, update the UI and display appropriate messages.
 */
function winner() {
    if (scorePlayer.textContent == '3') {
        document.body.style.backgroundColor = "#00B712";
        scoreComputer.textContent = "⭐️⭐️";
        scorePlayer.textContent = "⭐️⭐️";



    } else if (scoreComputer.textContent == '3') {
        document.body.style.backgroundColor = "	#FF0000";
        message.textContent = 'Looser!';
        scoreComputer.textContent = "⭐️⭐️";
        scorePlayer.textContent = "⭐️⭐️";
    }


}

/**
 * Reset the game to its initial state. */
function resetBtn() {

    message.textContent = "Choose one!";
    imagePlayer.src = `assets/images/default.png`;
    imageComputer.src = `assets/images/default.png`;
    scorePlayer.textContent = 0;
    scoreComputer.textContent = 0;
    document.body.style.backgroundColor = "	#212121";
}
