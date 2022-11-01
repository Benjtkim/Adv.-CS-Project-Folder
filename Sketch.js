let powerups = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  powerups.push(new Powerup(10, 500));
  console.log("hi");
}
  
function draw() {
  background(color('white'));
  temmie(0, 100);
  for (const powerup of powerups) {
    powerup.display();
  }
}


function temmie(x, y) {

  push();
  translate(x, y);
  textSize(10);
  text('░░░░░░░░░░▄▄░░░░░░░░░░░░░░░░░░░░░░░░░░░', width/2, 50);
  text('░░░░░░░░░██▀█▄░░▄██▀░░░░▄██▄░░░░░░░░░░░', width/2, 70);
  text('░░░░░░░░██▄▄▄████████▄▄█▀░▀█░░░░░░░░░░░', width/2, 90);
  text('░░░░░░░▄██████████████████▄█░░░░░░░░░░░', width/2, 120);
  text('░░░░░░▄██████████████████████░░░░░░░░░░', width/2, 140);
  text('░░░░░▄████████▀░▀█████████████░░░░░░░░░', width/2, 160);
  pop();
}

