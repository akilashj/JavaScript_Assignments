function Participants() {
  const number = parseInt(prompt("Enter the number of participants:"));

  if (isNaN(number) || number <= 0) {
    alert("Please Enter a valid number!");
    return;
  }