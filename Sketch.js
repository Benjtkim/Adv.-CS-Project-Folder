let powerups = [];
let pos = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}
  
function draw() {
  background(color('white'));
  drawTemmieNeck(10.2);
  drawTemmieNeck(22.2);
  for (const powerup of powerups) {
    powerup.display();
  }
}

function mouseWheel(event) {
  pos += event.delta;
  return pos;
}

function drawTemmieNeck(x) {
  textSize(10.1);
  text('░░░░░░░░░░░░▀▄▄▄▄▄▄▄▄▄▀░░░░░░░░░░░░░░░░', width/2-86.8, x);
}

