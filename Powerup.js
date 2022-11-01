class Powerup {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        
    }

    display() {
        textSize(50);
        text('p0WRuP!', this.x, this.y)
    }
}