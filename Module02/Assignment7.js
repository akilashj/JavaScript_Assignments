'use strict';
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function startRolling() {
  const sides = parseInt(prompt("Enter the number of sides on your dice:"));

  if (isNaN(sides) || sides < 2) {
    alert("Please enter a valid number!");
    return;
  }

  let roll;
  let output = `Rolling a ${sides}-sided dice...<ul>`;

  do {
    roll = rollDice(sides);
    output += `<li>You rolled: ${roll}</li>`;
  } while (roll !== sides);

  output += `</ul><p> You rolled the maximum number: ${sides}!</p>`;

  document.getElementById("result").innerHTML = output;
}
