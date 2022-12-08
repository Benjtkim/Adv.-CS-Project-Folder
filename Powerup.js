class Powerup {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        let powerup = createDiv('p0WRuP!');
        powerup.id('powerup');
        powerup.style('font-size', '35px');
        powerup.position(this.x, this.y);
        powerup.mousePressed(raiseScore);
    }
}

