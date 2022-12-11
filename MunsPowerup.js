class MunsPowerup extends Powerup {
    constructor(x, y, amtScrolled) {
        super(x, y);
        this.name = 'Muns p0WRuP!'
        this.effectName = getMuns
        this.id = 'munsPowerup'
    }

    display() {
        super.display();
    }

}

function getMuns() {
    const element = document.getElementById('munsPowerup');
    element.remove();
}