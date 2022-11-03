let powerups = [];
let pos = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // powerups.push(new Powerup(10, 500));
}
  
function draw() {
  background(color('white'));
  textSize(10);
  text('░░░░░░░░░░░░▀▄▄▄▄▄▄▄▄▄▀░░░░░░░░░░░░░░░░', width/2, pos);
  for (const powerup of powerups) {
    powerup.display();
  }
}

function mouseWheel(event) {
  pos += event.delta;
  return pos;
}

// function drawTemmieNeck() {
//   push();
//   textSize(10);
//   text('░░░░░░░░░░░░▀▄▄▄▄▄▄▄▄▄▀░░░░░░░░░░░░░░░░', width/2, pos);
//   pop();
// }

