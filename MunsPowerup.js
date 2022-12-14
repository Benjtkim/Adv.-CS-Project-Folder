class MunsPowerup extends Powerup {
    constructor(x, y, amtScrolled) {
        super(x, y);
        this.powerupName = 'Muns p0WRuP!';
        this.id = 'munsPowerup';
    }

    display() {
        super.display();
    }

    effect() {
        munsCount++;
        const element = document.getElementById('munsPowerup');
        element.remove();
        let coin = createDiv('🪙')
        coin.style('font-size', '35px');
        coin.style('z-index', '150');
        coin.position(this.x + 85, this.y);
    }
}
