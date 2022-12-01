let powerups = [];
let temWordsDisplayArray = [];
let uniqueWords = [];
let neckScrollMeasure = 0;
let wordScrollMeasure = 0;
let amtScrolled = 0;
let nextWord;
let createdNextWord;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  drawTemmieNeck();
  drawTemWords();
  uniqueWordsCounter();
  for (const powerup of powerups) {
    powerup.display();
  }
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
    let temWords = ['hOI', 'im', 'dis', 'da', 'famus', 'expensiv', 'Muns', 'bOI', 'hOIVS!', 'don', 'eg', 'colleg', 'cool leg', 'welcom'];
    nextWord = temWords[ceil(random(-1, temWords.length - 1))]
    let displayWord = createDiv(nextWord);
    displayWord.style('font-size', '35px');
    displayWord.position(random(10, width - 50), amtScrolled);
    temWordsDisplayArray.push(displayWord);
    createdNextWord = true;
    wordScrollMeasure = 0;
  }
}

function uniqueWordsCounter() {
  if (createdNextWord === true) {
    if (uniqueWords.includes(nextWord) === false) {
      uniqueWords.push(nextWord);
      console.log(uniqueWords);
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
  
}


