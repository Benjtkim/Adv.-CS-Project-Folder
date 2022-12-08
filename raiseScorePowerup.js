class raiseScorePowerup extends Powerup {
    constructor(x, y, amtScrolled) {
        super(x, y);
    }

    display() {
        super.display();
    }

}

function raiseScore() {
    // for (let i = 0; i <5; i++) {
    let temWords = ['hOI', 'im', 'dis', 'da', 'famus', 'expensiv', 'Muns', 'bOI', 'hOIVS!', 'don',
    'eg', 'colleg', 'cool leg', 'welcom'];
    displayWord = createDiv(temWords[ceil(random(-1, temWords.length - 1))]);
    displayWord.style('font-size', '35px');
    displayWord.style('z-index', '150');
    displayWord.position(1000, 100);
    // }
}