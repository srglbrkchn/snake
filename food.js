let food = { x: 10, y: 1 };
const EXPANTION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANTION_RATE);
    food = { x: 20, y: 10 };
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food-piece");
  gameBoard.appendChild(foodElement);
}
