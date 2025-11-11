'use strict';
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollUntilSix() {
  let roll;
  let output = "<ul>";

  do {
    roll = rollDice();
    output += `<li>You rolled: ${roll}</li>`;
  } while (roll !== 6);

  output += "</ul>";

  document.getElementById("result").innerHTML = output;
}