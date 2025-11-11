'use strict';
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function startRolling() {
  const sides = parseInt(prompt("Enter the number of sides on your dice:"));

  if (isNaN(sides) || sides < 2) {
    alert("Please enter a valid number (at least 2).");
    return;
  }

  let roll;
  let output = `<h3>Rolling a ${sides}-sided dice...</h3><ul>`;
