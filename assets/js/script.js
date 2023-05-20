'use strict';

// Get all attribute that will be used and store in Variable

const btnReset = document.querySelector('#btn-reset');
const imagePlayer = document.querySelector('#image--player');
const imageComputer = document.querySelector('#image--computer');
const btnsBox = document.querySelectorAll('.btn-box');
const scorePlayer = document.querySelector('#score-player');
const scoreComputer = document.querySelector('#score-computer');


console.log(btnsBox);

//Computer choice
const computerChoice = ['rock', 'paper', 'scissors'];


let message;
let computer;
let player;

/**
 * The loop iterating over a collection of buttons with the variable name "buttons" representing each button in the collection. 
 * It seems to be adding an event listener to each button, 
 * specifically listening for a 'click' event. When a button is clicked, the code inside the function will be executed.
 */
for (let buttons of btnsBox) {
    buttons.addEventListener('click', function () {
        let itens = this.getAttribute('data-choice');
        gameSteUp(itens);

    });
}


/**
 * 
 * @param {This function will define random number for call } itens 
 */
function gameSteUp(itens) {

    let randomNumber = Math.floor(Math.random() * 3);

    imageComputer.src = `assets/images/${computerChoice[randomNumber]}.png`;
    imagePlayer.src = `assets/images/${computerChoice[itens]}.png`;

}


