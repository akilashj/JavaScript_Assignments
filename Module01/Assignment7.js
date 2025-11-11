'use strict';

const number = parseInt(prompt('Enter the count of dice you would like to roll: '));

let sum = 0;

for
(let i = 0; i < number; i++) {
const roll = Math.floor(Math.random() * 6) + 1;
  sum += roll;
}

document.querySelector('#output').innerHTML = `
  You rolled ${number} dice. <br>
  The total sum is ${sum}.`;
