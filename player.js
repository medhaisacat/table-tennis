class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
    increaseScore() {
        let increment = 1;
        this.score += increment;
    }
}

module.exports = {
    Player
}