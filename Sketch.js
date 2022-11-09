let powerups = [];
scrollMeasure = 0;
widthCounter = 0;

let elem = document.querySelector('.container');
let infScroll = new InfiniteScroll( elem, {
  // options
  path: '.pagination__next',
  append: '.post',
  history: false,
});

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
    textSize(10.1);
    text('░░░░░░░░░░░░▀▄▄▄▄▄▄▄▄▄▀░░░░░░░░░░░░░░░░', width/2-86.8, 10.2 + widthCounter * 12);
    scrollMeasure = 0;
    widthCounter++;
  }
}

