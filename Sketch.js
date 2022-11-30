let powerups = [];
let temWordsDisplayArray = [];
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
    let temWords = ['hOI', 'famus', 'Muns', 'bOI', 'hOIVS', 'bOI', 'eg', 'colleg'];
    nextWord = temWords[ceil(random(0, temWords.length))]
    let displayWord = createDiv(nextWord);
    displayWord.style('font-size', '35px');
    displayWord.position(random(10, width - 50), amtScrolled);
    temWordsDisplayArray.push(displayWord);
    createdNextWord = true;
    wordScrollMeasure = 0;
  }
}

function uniqueWordsCounter() {
  let uniqueWords = [];
  console.log(uniqueWords);
  if (createdNextWord === true) {
    createdNextWord = false;
    if (uniqueWords.includes(nextWord) === false) {
      uniqueWords.push(nextWord);
      console.log(nextWord);
    }
  }
  textSize(30);
  text('You have found ' + uniqueWords.length + ' unique Temmie words', 50, 50)
}


