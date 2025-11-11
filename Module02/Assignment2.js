function Participants() {
  const number = parseInt(prompt("Enter the number of participants:"));

  if ((number) || number <= 0) {
    alert("Please Enter a valid number!");
    return;
  }

  const participants = [];

  for (let i = 0; i < number; i++) {
    const name = prompt(`Enter the name of participant ${i + 1}:`);
    participants.push(name.trim());
  }