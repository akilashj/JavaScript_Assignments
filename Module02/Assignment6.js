'use strict';
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollUntilSix() {
  let roll;
  let output = "<ul>";