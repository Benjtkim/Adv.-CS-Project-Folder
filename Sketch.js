let powerups = [];
scrollMeasure = 0;

function setup() {
  background(255);
  createCanvas(windowWidth, windowHeight);
}
  
function draw() {
  drawTemmieNeck();
  for (const powerup of powerups) {
    powerup.display();
  }
}

function mouseWheel(event) {
  scrollMeasure += event.delta;
}

function drawTemmieNeck() {
  if (scrollMeasure > 12) {
    let element = document.getElementById("temmieNeck");
    for (let i = 0; i < 15; i++) {
      element.innerHTML += "<div>░░░░░░░░░░░░▀▄▄▄▄▄▄▄▄▄▀░░░░░░░░░░░░░░░░</div>";
    }
    scrollMeasure = 0;
  }
}

