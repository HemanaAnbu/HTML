var x = 0,
  y = 0;
var child = document.getElementById("child");
let moveLeft = () => {
  if (x != 0) {
    x -= 5;
    child.style.left = `${x}px`;
  }
};
let moveRight = () => {
  if (x != 450) {
    x = x + 5;
    child.style.left = `${x}px`;
  }
};
let moveUp = () => {
  if (y != 0) {
    y -= 5;
    child.style.top = `${y}px`;
  }
};
let moveDown = () => {
  if (y != 450) {
    y += 5;
    child.style.top = `${y}px`;
  }
};
let move = () => {

    x+=5;
    y+=5;
    child.style.width+=x;
    child.style.height+=y;

//   x >= 0 && y == 0 && moveRight();
//   y >= 0 && x == 450 && moveDown();
//   y == 450 && x <= 450 && moveLeft();
//   y <= 450 && x == 0 && moveUp();
};
var timer;
let start = () => {
  timer = setInterval(move, 10);
};
let stop = () => {
  clearInterval(timer);
};
