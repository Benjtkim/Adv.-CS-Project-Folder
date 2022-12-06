// let powerups = [];
let uniqueWords = [];
let neckScrollMeasure = 0;
let wordScrollMeasure = 0;
let amtScrolled = 0;
let nextWord;
let createdNextWord;
let wordCount = 0;
let powerup;

function setup() {
  createCanvas(windowWidth, windowHeight);
  powerup = new raiseScorePowerup(0, 100);
}

function draw() {
  drawTemmieNeck();
  drawTemWords();
  statsCounters();
  raiseScorePowerup.display();
  // for (const powerup of powerups) {
  //   powerup.display();
  // }
}

function mouseWheel(event) {
  neckScrollMeasure += event.delta;
  wordScrollMeasure += event.delta;
  amtScrolled += event.delta;
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
  if (wordScrollMeasure > 800) {
    let temWords = ['hOI', 'im', 'dis', 'da', 'famus', 'expensiv', 'Muns', 'bOI', 'hOIVS!', 
    'don', 'eg', 'colleg', 'cool leg', 'welcom'];
    nextWord = temWords[ceil(random(-1, temWords.length - 1))]
    let displayWord = createDiv(nextWord);
    displayWord.style('font-size', '35px');
    displayWord.style('z-index', '150');
    displayWord.position(random(10, 1100), amtScrolled);
    createdNextWord = true;
    wordScrollMeasure = 0;
  }
}

function statsCounters() {
  if (createdNextWord === true) {
    if (uniqueWords.includes(nextWord) === false) {
      uniqueWords.push(nextWord);
      wordCount++;
    }
    else {
      wordCount++;
    }
    createdNextWord = false;
  }
  clear();
  textSize(20);
  if (uniqueWords.length === 1) {
    text('You have found 1 unique Temmie word', 10, 30);
  }
  else if (uniqueWords.length === 14) {
    text('You have found every unique Temmie word', 10, 30)
  }
  else {
    text('You have found ' + uniqueWords.length + ' unique Temmie words', 10, 30);
  }
  text('Word count: ' + wordCount, 10, 60);

  if (wordCount <= 10) {
    text('Your Temmie is tem long', 10, 90);
  }
  else if (wordCount <= 20) {
    text('Your Temmie is tem tem long', 10, 90);
  }
  else if (wordCount <= 30) {
    text('Your Temmie is tem tem tem long', 10, 90);
  }
  else if (wordCount <= 40) {
    text('Your Temmie is temmie long', 10, 90);
  }
  else if (wordCount <= 50) {
    text('Your Temmie is temmie temmie long', 10, 90);
  }
  else if (wordCount <= 60) {
    text('Your Temmie is temmie temmie tem long', 10, 90);
  }
  else {
    text('Your Temmie is temmie temmie tem tem long', 10, 90);
  }
}


