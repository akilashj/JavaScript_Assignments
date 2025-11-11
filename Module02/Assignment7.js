'use strict';
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function startRolling() {
  const sides = parseInt(prompt("Enter the number of sides on your dice:"));