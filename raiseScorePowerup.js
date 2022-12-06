class raiseScorePowerup extends Powerup() { 
    constructor(x, y) { 
        super(x, y)
    }

    display() {
        super.display();
        powerup.mousePressed(raiseScore);
    }
}

function raiseScore() {
    console.log("asldfkj;alk")
}