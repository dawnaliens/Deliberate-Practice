'use strict';

// Selecting elements
const score0Ele = document.querySelector('#score--0');
const score1Ele = document.getElementById('score--1');
const diceEle = document.querySelector('.dice');

score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEle.classList.add('hidden');

