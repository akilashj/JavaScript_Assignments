'use strict';
function checkNumbers() {
  const numbers = [];

  while (true) {
    const input = prompt("Enter a Number:");
    const num = Number(input);

    if (isNaN(num)) {
      alert("Please Enter a Valid Number!");
      continue;
    }

    if (numbers.includes(num)) {
      alert(`You already Entered the number ${num}! Now Program will stop.`);
      break;
    }

    numbers.push(num);
  }

  numbers.sort((a, b) => a - b);

  console.log("Numbers Entered in Ascending Order:");
  for (let n of numbers) {
    console.log(n);
  }
}

