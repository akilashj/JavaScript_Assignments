'use strict';
const Start = parseInt(prompt('Enter the start year:'));
const End = parseInt(prompt('Enter the end year:'));

let leapYears = [];
for
 (let year = Start; year <= End; year++) {
  if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
    leapYears.push(year);
  }
}

