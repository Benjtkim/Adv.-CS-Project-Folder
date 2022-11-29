let powerups = [];
let temWords = [];
let neckScrollMeasure = 0;
let wordScrollMeasure = 0;
let position = 0;

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
  neckScrollMeasure += event.delta;
  wordScrollMeasure += event.delta;
  position += event.delta;
  console.log(wordScrollMeasure);
}

function drawTemmieNeck() {
  if (neckScrollMeasure > 12) {
    let element = document.getElementById("temmieNeck");
    for (let i = 0; i < 10; i++) {
      element.innerHTML += "<div>░░░░░░░░░░░░▀▄▄▄▄▄▄▄▄▄▀░░░░░░░░░░░░░░░░</div>";
    }
    neckScrollMeasure = 0;
  }
}

function drawTemWords() {
  if (wordScrollMeasure > 1000) {
    let temWords = ['hOI', 'famus', 'Muns', 'bOI', 'hOIVS', 'bOI', 'eg', 'colleg'];
    let displayWord = createDiv(temWords[ceil(random(0, temWords.length))]);
    displayWord.style('font-size', '35px');
    displayWord.position(random(10, width - 50), position);
    temWords.push(displayWord);
    wordScrollMeasure = 0;
  }
}


