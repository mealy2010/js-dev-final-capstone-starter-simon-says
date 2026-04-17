/** * DOM SELECTORS */
const startButton = document.querySelector(".js-start-button");
const statusSpan = document.querySelector(".js-status");
const heading = document.querySelector(".js-heading");
const padContainer = document.querySelector(".js-pad-container");

/** * VARIABLES */
let computerSequence = [];
let playerSequence = [];
let maxRoundCount = 0;
let roundCount = 0;

/**
 * The `pads` array contains an array of pad objects.
 */
const pads = [
  {
    color: "red",
    selector: document.querySelector(".js-pad-red"),
    sound: new Audio("../assets/simon-says-sound-1.mp3"),
  },
  {
    color: "green",
    selector: document.querySelector(".js-pad-green"),
    sound: new Audio("../assets/simon-says-sound-2.mp3"),
  },
  {
    color: "blue",
    selector: document.querySelector(".js-pad-blue"),
    sound: new Audio("../assets/simon-says-sound-3.mp3"),
  },
  {
    color: "yellow",
    selector: document.querySelector(".js-pad-yellow"),
    sound: new Audio("../assets/simon-says-sound-4.mp3"),
  },
];

/** * EVENT LISTENERS */
padContainer.addEventListener("click", padHandler);
startButton.addEventListener("click", startButtonHandler);

/** * EVENT HANDLERS */
function startButtonHandler() {
  maxRoundCount = setLevel();
  roundCount = 1;
  startButton.classList.add("hidden");
  statusSpan.classList.remove("hidden");
  playComputerTurn();

  return { startButton, statusSpan };
}

function padHandler(event) {
  const { color } = event.target.dataset;
  if (!color) return;

  const pad = pads.find((pad) => pad.color === color);
  pad.sound.play();
  checkPress(color);

  return color;
}

/** * HELPER FUNCTIONS */
function setLevel(level = 1) {
  if (level === 1) return 8;
  if (level === 2) return 14;
  if (level === 3) return 20;
  if (level === 4) return 31;

  return "Please enter level 1, 2, 3, or 4";
}

function getRandomItem(collection) {
  if (collection.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex];
}

function setText(element, text) {
  const target = element.length ? element[0] : element;
  target.textContent = text;
  return target;
}

function activatePad(color) {
  const pad = pads.find((pad) => pad.color === color);
  pad.selector.classList.add("activated");
  pad.sound.play();

  setTimeout(() => {
    pad.selector.classList.remove("activated");
  }, 500);
}

function activatePads(sequence) {
  sequence.forEach((color, index) => {
    setTimeout(() => {
      activatePad(color);
    }, (index + 1) * 600);
  });
}

function playComputerTurn() {
  padContainer.classList.add("unclickable");
  setText(statusSpan, "The computer's turn...");
  setText(heading, `Round ${roundCount} of ${maxRoundCount}`);

  const randomColor = getRandomItem(["red", "blue", "green", "yellow"]);
  computerSequence.push(randomColor);

  activatePads(computerSequence);

  setTimeout(() => playHumanTurn(roundCount), roundCount * 600 + 1000);
}

function playHumanTurn() {
  padContainer.classList.remove("unclickable");
  const remainingPresses = computerSequence.length - playerSequence.length;
  setText(statusSpan, `The player's turn... ${remainingPresses} press(es) left`);
}

function checkPress(color) {
  playerSequence.push(color);

  const index = playerSequence.length - 1;
  const remainingPresses = computerSequence.length - playerSequence.length;

  setText(statusSpan, `The player's turn... ${remainingPresses} press(es) left`);

  if (computerSequence[index] !== playerSequence[index]) {
    resetGame("Wrong pad! Game over!");
    return;
  }

  if (remainingPresses === 0) {
    checkRound();
  }
}

function checkRound() {
  if (playerSequence.length === maxRoundCount) {
    resetGame("You won the game!");
  } else {
    roundCount += 1;
    playerSequence = [];
    window.playerSequence = playerSequence;
    setText(statusSpan, "Nice! Keep going!");

    setTimeout(() => {
      playComputerTurn();
    }, 1000);
  }
}

function resetGame(text) {
  computerSequence = [];
  playerSequence = [];
  roundCount = 0;
  maxRoundCount = 0;

  window.computerSequence = computerSequence;
  window.playerSequence = playerSequence;
  window.roundCount = roundCount;
  window.maxRoundCount = maxRoundCount;

  alert(text);
  setText(heading, "Simon Says");
  startButton.classList.remove("hidden");
  statusSpan.classList.add("hidden");
  padContainer.classList.add("unclickable");
}

/**
 * Please do not modify the code below.
 * Used for testing purposes.
 */
window.statusSpan = statusSpan;
window.heading = heading;
window.padContainer = padContainer;
window.pads = pads;
window.computerSequence = computerSequence;
window.playerSequence = playerSequence;
window.maxRoundCount = maxRoundCount;
window.roundCount = roundCount;
window.startButtonHandler = startButtonHandler;
window.padHandler = padHandler;
window.setLevel = setLevel;
window.getRandomItem = getRandomItem;
window.setText = setText;
window.activatePad = activatePad;
window.activatePads = activatePads;
window.playComputerTurn = playComputerTurn;
window.playHumanTurn = playHumanTurn;
window.checkPress = checkPress;
window.checkRound = checkRound;
window.resetGame = resetGame;
