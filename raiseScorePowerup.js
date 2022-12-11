class RaiseScorePowerup extends Powerup {
    constructor(x, y) {
        super(x, y);
        this.powerupName = 'rAiSe Sc0Ir!';
        this.effectName = raiseScore;
        this.id = 'raiseScorePowerup';
    }

    display() {
        super.display();
    }

}

let counter = 1;

function raiseScore() {
    for (let i = 0; i <5; i++) {
        let temWords = ['hOI', 'im', 'dis', 'da', 'famus', 'expensiv', 'bOI', 'hOIVS!', 'don', 'eg', 
        'colleg', 'cool leg', 'welcom'];
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
        displayWord.position(random(10, 1100), random(amtScrolled - 4850 * counter, amtScrolled - 4600 * 
        counter));
    }
    const element = document.getElementById('raiseScorePowerup');
    element.remove();
    counter += 1.1;
    console.log(counter);
}