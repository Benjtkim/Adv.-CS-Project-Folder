let powerups = [];
let scrollMeasure1 = 0;
let scrollMeasure2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  
}
  
function draw() {
  drawTemmieNeck();
  drawTemWords();
  for (const powerup of powerups) {
    powerup.display();
  }
}

function mouseWheel(event) {
  scrollMeasure1 += event.delta;
  scrollMeasure2 += event.delta;
  console.log(scrollMeasure2);
}

function drawTemmieNeck() {
  if (scrollMeasure1 > 12) {
    let element = document.getElementById("temmieNeck");
    for (let i = 0; i < 10; i++) {
      element.innerHTML += "<div>░░░░░░░░░░░░▀▄▄▄▄▄▄▄▄▄▀░░░░░░░░░░░░░░░░</div>";
    }
    scrollMeasure1 = 0;
  }
}

function drawTemWords() {
  let temWords = ['hOI', 'famus', 'Muns', 'bOI', 'hOIVS', 'bOI', 'eg', 'colleg']; 
  let displayWord = temWords[ceil(random(0, temWords.length))];
  if (scrollMeasure2 > 1000) {
    textSize(30);
    text(displayWord, random(0, width), scrollMeasure2 - 800);
    scrollMeasure2 = 0;
  }
}
