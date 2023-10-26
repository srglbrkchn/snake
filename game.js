import {
  draw as drawSnake,
  update as updateSnake,
  SNAKE_SPEED,
  snakeIntersection,
  getSnakeHead,
} from "./snake.js";

import { outsideGrid } from "./grid.js";

import { update as updateFood, draw as drawFood } from "./food.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

// game loop
function main(currentTime) {
  if (gameOver) {
    if (confirm("You lost. Press OK to restart.")) {
      window.location = "/index.html";
    } else return;
  }
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
  updateFood();
  checkDeath();
}

function draw() {
  // clear the view
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
