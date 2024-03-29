let uniqueWords = [];
let neckScrollMeasure = 0;
let wordScrollMeasure = 0;
let amtScrolled = 0;
let munsScrollMeasure = 0;
let raiseScoreScrollMeasure = 0;
let nextWord;
let createdNextWord;
let wordCount = 0;
let powerup;
let scrollDemo;
let munsCount = 0;
let gameSong;

function preload() {
  gameSong = loadSound('tomp3.cc - Undertale Ost 087  Hopes and Dreams.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  drawTemWords();
  drawPowerups();
  statsCounters();
  graduateCollege();
  audioIcon();
}

function mouseWheel(event) {
  neckScrollMeasure += event.delta;
  wordScrollMeasure += event.delta;
  amtScrolled += event.delta;
  munsScrollMeasure += event.delta;
  raiseScoreScrollMeasure += event.delta;
}

function drawTemWords() {
  if (wordScrollMeasure > 800) {
    let temWords = ['hOI', 'im', 'dis', 'da', 'famus', 'expensiv', 'bOI', 'hOIVS!', 'don', 'eg', 
    'colleg', 'cool leg', 'welcom'];
    nextWord = temWords[ceil(random(-1, temWords.length - 1))]
    let displayWord = createDiv(nextWord);
    displayWord.style('font-size', '35px');
    displayWord.style('z-index', '150');
    displayWord.position(random(10, 1100), amtScrolled);
    createdNextWord = true;
    wordScrollMeasure = 0;
  }
}

function drawPowerups() {
  if (munsScrollMeasure > 6000) {
    powerup = new MunsPowerup(random(10, 1000), amtScrolled)
    powerup.display();
    munsScrollMeasure = 0;
  }

  if (raiseScoreScrollMeasure > 10000) {
    powerup = new RaiseScorePowerup(random(10, 1100), amtScrolled);
    powerup.display();
    raiseScoreScrollMeasure = 0;
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
  else if (uniqueWords.length === 13) {
    text('You have found every unique Temmie word', 10, 30)
  }
  else {
    text('You have found ' + uniqueWords.length + ' unique Temmie words', 10, 30);
  }
  text('Word count: ' + wordCount, 10, 60);

  if (wordCount <= 10) {
    text('Your Temmie is tem long', 10, 90);
  }
  else if (wordCount <= 30) {
    text('Your Temmie is tem tem long', 10, 90);
  }
  else if (wordCount <= 50) {
    text('Your Temmie is tem tem tem long', 10, 90);
  }
  else if (wordCount <= 70) {
    text('Your Temmie is temmie long', 10, 90);
  }
  else if (wordCount <= 90) {
    text('Your Temmie is temmie temmie long', 10, 90);
  }
  else if (wordCount <= 110) {
    text('Your Temmie is temmie temmie tem long', 10, 90);
  }
  else if (wordCount <= 130) {
    text('Your Temmie is temmie temmie tem tem long', 10, 90);
  }
  else {
    text('Your Temmis is temmie temmie tem temmie long', 10, 90);
  }

  if (munsCount >= 1) {
    text('Money: ' + munsCount, 10, 120);
  }
  else {
    textSize(17.5);
    text('Collect Muns p0WRuPs to send Temmie to colleg', 10, 115.5);
  }

  if (munsCount >= 10) {
    textSize(16.5);
    text("Congrats. You've sent Temmie to Hardvard. +10 muns", 9.5, 145.5);
    text("Scroll way up to see the fruits of your labor", 9.5, 170.5);
  }
}

function audioIcon() {
  fill(color('black'))
  ellipse(width - 42, 40, 42)
  if (gameSong.isPlaying()) {
    textSize(30);
    text('🔊', width - 61, 50);
  }
  else {
    textSize(30);
    text('🔇', width - 58, 50);
  }
}

function isOverAudioIcon() {
  if (dist(width - 34, 40, mouseX, mouseY) < 21) {
    return true;
  }
  else {
    return false;
  }
}

function mousePressed() {
  pauseOrPlayMusic();
}

function pauseOrPlayMusic() {
  if (isOverAudioIcon() == true && gameSong.isPlaying() == false) {
    gameSong.play();
  }
  else if ((isOverAudioIcon() && gameSong.isPlaying() == true)) {
    gameSong.pause();
  }
}

function graduateCollege () {
  if (munsCount === 10) {
    let element = document.getElementById("graduationCap");
    element.innerHTML += "<div>🎓</div>";
    munsCount += 10;
  }
}
