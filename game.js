import {
  draw as drawSnake,
  update as updateSnake,
  SNAKE_SPEED,
} from "./snake.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

// game loop
function main(currentTime) {
  window.requestAnimationFrame(main);
  const secSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secSinceLastRender < 1 / SNAKE_SPEED) {
    return;
  }

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
}

function draw() {
  // clear the view
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
}
