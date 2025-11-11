'use strict';
let num1 = parseInt(prompt('Enter First Number:'));
let num2 = parseInt(prompt('Enter Second Number:'));
let num3 = ParseInt(prompt('Enter Third Number:'));

let sum = num1 + num2 + num3;
let product = num1 * num2 * num3
let average = sum / 3
document.querySelector('#result').innerHTML =`Sum of the numbers is, ${sum};
document.querySelector('#result').innerHTML =`Product of the numbers is, ${product};
document.querySelector('#result').innerHTML =`Average of the numbers is, ${average};