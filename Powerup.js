class Powerup {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        let powerup = createDiv(this.powerupName);
        powerup.id(this.id);
        powerup.style('font-size', '35px');
        powerup.position(this.x, this.y);
        powerup.mousePressed(this.effect);
    }
}

