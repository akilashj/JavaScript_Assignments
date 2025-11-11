'use strict';
function concat(stringsArray) {
  let result = "";

for (let i = 0; i < stringsArray.length; i++) {
    result += stringsArray[i];
  }

  return result;
}
const names = ["Johnny", "DeeDee", "Joey", "Marky"];

const combined = concat(names);
document.getElementById("result").innerHTML = `<p>${combined}</p>`;