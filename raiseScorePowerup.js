class raiseScorePowerup extends Powerup {
    constructor(x, y, amtScrolled) {
        super(x, y);
    }

    display() {
        super.display();
    }

}


function raiseScore() {
    for (let i = 0; i <5; i++) {
        let temWords = ['hOI', 'im', 'dis', 'da', 'famus', 'expensiv', 'Muns', 'bOI', 'hOIVS!', 'don',
        'eg', 'colleg', 'cool leg', 'welcom'];
        let nextWord = temWords[ceil(random(-1, temWords.length - 1))];
        if (uniqueWords.includes(nextWord) === false) {
            uniqueWords.push(nextWord);
            wordCount++;
          }
          else {
            wordCount++;
          }
        displayWord = createDiv(nextWord);
        displayWord.style('font-size', '35px');
        displayWord.style('z-index', '150');
        displayWord.position(random(10, 1100), random(amtScrolled - 4850, amtScrolled - 4570));
    }
    const element = document.getElementById('powerup');
    element.remove();
}