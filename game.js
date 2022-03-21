var playerA = 0;
var playerB = 0;

//var currentServe = 'A';

var executeServe = function() {
    var randomNumber = Math.random() * 10;
    randomNumber = Math.round(randomNumber);
    if(randomNumber % 2 == 0) {
        playerA++;
    } else {
        playerB++;
    }
}

var displayScore = function(winner) {
    console.log(winner, "wins!");
    console.log("Score: ", playerA, "- ", playerB);
}

var play = function() {
    while(playerA != 11 && playerB != 11 
        && (playerA != 10 || playerB != 10) 
        && (playerA != 20 || playerB != 20)) {
            executeServe();
    }
    if (playerA == 11) {
        displayScore("playerA");
        return;
    }
    if (playerB == 11) {
        displayScore("playerB");
        return;
    }
    // If scores are tied at 10-10
    if (playerA == 10 && playerB == 10) {
        while(Math.abs(playerA - playerB) != 2) {
            executeServe();
        }
        if((playerA - playerB) == 2) {
            displayScore("playerA");
            return;
        } else if((playerB - playerA) == 2) {
            displayScore("playerB");
            return;
        }
    }
    // If scores are tied at 20-20
    if (playerA == 20 && playerB == 20) {
        executeServe();
        if(playerA == 21) {
            displayScore("playerA");
            return;
        } else if(playerB == 21) {
            displayScore("playerB");
            return;
        }
    }
}

play();