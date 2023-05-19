'use strict';

// Get all attribute that will be used and store in Variable

const btnReset = document.querySelector('#btn-reset');
const imagePlayer = document.querySelector('#image--player');
const imageComputer = document.querySelector('#image--computer');
const btnsBox = document.querySelectorAll('#btn-box');
const scorePlayer = document.querySelector('#score-player');
const scoreComputer = document.querySelector('#score-computer');

//Computer choice
const computerChoice = ['rock', 'paper', 'scissors'];


let message;
let computer;
let player;

/**
 * 
 */
for (buttons of computerChoice) {
    buttons.addEventListener('click', function () {
        let itens = this.getAttribute('data-choice');
        gameSteUp();

    });
}

function gameSteUp (itens){
    
}