'use strict';
function sortNumbers() {
  const numbers = [];

  while (true) {
    const input = prompt("Enter a Number:");
    const num = Number(input);

    if (num == 0) {
      break;
    }
    if (!isNaN(num)) {
      numbers.push(num);
    } else {
      alert("Please enter a valid number!");
    }
  }
