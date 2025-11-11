use strict';

const number = parseInt(prompt('Enter an integer:'));

let primenumber = true;
if (number <= 1) {
  primenumber = false;
}

else {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      primenumber = false;
      break;
    }
  }
}