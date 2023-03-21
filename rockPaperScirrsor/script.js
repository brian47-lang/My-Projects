const choices = ["rock", "paper", "scissors"];
const pChoice = document.querySelector("#playerChoice");
const playBtn = document.getElementById("playRound");
const pWins = document.querySelector("#Player_Wins");
const aiWins = document.querySelector("#Ai_Wins");
const tie = document.querySelector("#tieEl");
let message = document.querySelector("#messageEl");
const rpsImg  = document.getElementById("rpsPicEl");

var round = 0;
var playerWin = 0;
var aiWin = 0;
var tieScore = 0;

pWins.innerHTML = playerWin;
aiWins.innerHTML = aiWin;
tie.innerHTML = tieScore
function playerChoice() {
  return pChoice.value;
}

function aiChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function isValidChoice(human) {
  return choices.includes(human);
}

function updateScores(){
pWins.innerHTML = playerWin;
aiWins.innerHTML = aiWin;
tie.innerHTML = tieScore
pChoice.value = "";
}

function checkRound(){
  if (aiWin < playerWin){
    message.innerHTML = "PLAYER IS THE WINNER!!"
  }else if(aiWin > playerWin){
    message.innerHTML = "AI IS THE WINNER!!"
  }
}

function restart(){
  message.innerHTML = "GAME RESTARTED!!";
  round = 0;
  aiWin = 0;
  playerWin = 0;
  tieScore = 0;
  updateScores();
}

function rotatePic(ai){
  //the line below gets the index/postion ofr ai pick from the choices array//
  const index = choices.indexOf(ai);
  const degree = index * 120;
  rpsImg.style.transform = `rotate(${degree}deg)`;
}

function play() {
  const human = playerChoice();
  const ai = aiChoice();
  rotatePic();
  rotatePic(ai);
  round += 1;
  if (human === "rock" && ai === "paper") {
    message.innerHTML = "ai wins" 
    aiWin += 1;
    console.log("ai wins");

  } else if (human === "paper" && ai === "scissors") {
    message.innerHTML = "ai wins"
    aiWin += 1;
    console.log("ai wins");

  } else if (human === "scissors" && ai === "rock") {
    message.innerHTML = "ai wins"
    aiWin += 1;
    console.log("ai wins");

  } else if (human === ai) {
    message.innerHTML = "its a tie"
    round -+ 1;
    tieScore +=1;
    console.log("tie");

  } else if (isValidChoice(human) === false) {
    message.innerHTML = "Invalid input!! try again"
   round -+ 1;
    console.log("invalid input!!");
  } else {
    message.innerHTML = "player wins"
    playerWin += 1;
    console.log("player wins");
  }
 // changeColor();
  updateScores();
  if (round ===5 ){
  checkRound();
  }else if (round > 5){
    restart();
  }
}

playBtn.addEventListener("click", play);


