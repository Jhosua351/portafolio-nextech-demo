var player = "O";
var turnsTaken = 0;
var gameIsOver = false;
function changePlayers() {
    turnsTaken = turnsTaken + 1;
    if (player === "X") {
        player = "O";
    } else if (player === "O") {
        player = "X";
    }
}
function performLogic(button, tile) {
    if (gameIsOver === false) {
        $(button).hide();
        $(tile).html(player);
        checkVertical();
        checkHorizontal();
        checkDiagonal();
        changePlayers();
        tieGame();
    }
}
function win(tileId1, tileId2, tileId3) {
    if (
        $(tileId1).html() === player &&
        $(tileId2).html() === player &&
        $(tileId3).html() === player) {
        $("h1").text(player + " is the winner");
        gameIsOver = true;
    }
}
function tieGame() {
    if (turnsTaken > 8 && gameIsOver === false) {
        $("h1").text("It's a tie");
        gameIsOver = true;
    }
}
function checkVertical() {
    win("#tile1", "#tile4", "#tile7");
    win("#tile2", "#tile5", "#tile8");
    win("#tile3", "#tile6", "#tile9");
}
function checkDiagonal() {
    win("#tile1", "#tile5", "#tile9");
    win("#tile7", "#tile5", "#tile3");
}
function checkHorizontal() {
    win("#tile1", "#tile2", "#tile3");
    win("#tile4", "#tile5", "#tile6");
    win("#tile7", "#tile8", "#tile9");
}
$(document).ready(function() {
$("#button1").click(function() {
    performLogic("#button1", "#tile1");
});
});
$(document).ready(function() {
$("#button2").click(function() {
    performLogic("#button2", "#tile2");
});
});
$(document).ready(function() {
$("#button3").click(function() {
    performLogic("#button3", "#tile3");
});
});
$(document).ready(function() {
$("#button4").click(function() {
    performLogic("#button4", "#tile4");
});
});
$(document).ready(function() {
$("#button5").click(function() {
    performLogic("#button5", "#tile5");
});
});
$(document).ready(function() {
$("#button6").click(function() {
    performLogic("#button6", "#tile6");
});
});
$(document).ready(function() {
$("#button7").click(function() {
    performLogic("#button7", "#tile7");
});
});
$(document).ready(function() {
$("#button8").click(function() {
    performLogic("#button8", "#tile8");
});
});
$(document).ready(function() {
$("#button9").click(function() {
    performLogic("#button9", "#tile9");
});
});


