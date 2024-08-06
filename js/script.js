function getComputerChoice() {
  const choices = ["0", "rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3) + 1;
  return choices[randomIndex];
}
function getHumanChoice() {
  return prompt("rock paper or scissors?");
}
console.log(getHumanChoice());
