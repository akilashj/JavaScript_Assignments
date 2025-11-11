'use strict';
const Start = parseInt(prompt('Enter the start year:'));
const End = parseInt(prompt('Enter the end year:'));

let leapyears;
for
 (let year = Start; year <= End; year++) {
  if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
    leapyears.push(year);
  }
}

let output = '<ul>';
for (let i = 0; i < leapyears.length; i++) {
  output += `<li>${leapyears[i]}</li>`;
}

output += '</ul>';
document.querySelector('#result').innerHTML = `
  Leap years between ${Start} and ${End}:${output}`;

