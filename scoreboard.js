class Scoreboard {
    constructor(playerA, playerB) {
        this.playerA = playerA;
        this.playerB = playerB;
        this.winner = null;
    }
    generatePoints() { // should this be inside player?
        let decimal = 10;
        return Math.ceil(Math.random() * decimal);
    }
    inFavourOf(points) {
        let even = 2;
        return ( (points % even) == 0 )? this.playerA : this.playerB;
    }
    recordServeScore() {
        // one player serves
        // record points for that serve
        let points = this.generatePoints();
        this.inFavourOf(points).increaseScore();
    }
    isWinningPointsReached(winningScore) {
        if(this.playerA.score == winningScore) {
            return this.playerA;
        }
        if(this.playerB.score == winningScore) {
            return this.playerB;
        }
        return null;
    }
    isTwoPointLead() {
        let lead = 2;
        let winner = null;
        if(Math.abs(this.playerA.score - this.playerB.score) == lead) {
            winner = (this.playerA.score > this.playerB.score) ?  this.playerA : this.playerB;
        }
        return winner;
    }
    isScoreTied(points) {
        return (this.playerA.score == this.playerB.score == points) ? true : false;
    }
    getWinner() {
        let tenPoints = 10;
        let elevenPoints = 11;
        let twentyOnePoints = 21;
        if (this.isWinningPointsReached(elevenPoints)) {
            return this.isWinningPointsReached(elevenPoints);
        }
        if (this.isScoreTied(tenPoints) && this.isTwoPointLead()) {
            return this.isTwoPointLead()
        }
        if(this.isWinningPointsReached(twentyOnePoints)) {
            return this.isWinningPointsReached(twentyOne);
        }
    }
    printWinner() {
        console.log(this.winner);
        console.log(this.playerA, this.playerB);
    }
    play() {
        do {
            this.recordServeScore();
        } while(!this.getWinner());
        this.winner = this.getWinner();
        this.printWinner();
    }

}

module.exports = {
    Scoreboard
}