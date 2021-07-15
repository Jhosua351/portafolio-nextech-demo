//Tic-Tac-Toe

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
        $("h3").text(player + " is the winner");
        gameIsOver = true;
    }
}
function tieGame() {
    if (turnsTaken > 8 && gameIsOver === false) {
        $("h3").text("It's a tie");
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

//End of Tic-Tac-Toe

//Calculator

// Global variables
var displayValue = "0";
var storedValue = "0";
var operation = null;
var clearOnNextInput = false;

// Calculator functions
function add(x, y) {
    console.log(`Adding ${x} + ${y}`);
    return x + y;
}

function subtract(x, y) {
    console.log(`Subtracting ${x} - ${y}`);
    return x-y;
}

function multiply(x, y){
    console.log(`Multiplying ${x} * ${y}`);
    return x * y;
}

function divide(x, y){
    console.log(`Dividing ${x} / ${y}`);
    return x / y;
}


function negateValue(val){
    return val * -1;
    
    console.log(`Negating ${val}`);

}

function convertValueToPercentage(val) {
    return val /100;
    console.log(`Converting ${val} to a percentage`);
}


//--------------------------------------------------
// The rest of the calculator code lives below.
// You shouldn't need to modify anything down here, 
// but read it to see how the calculator works!
function updateDisplay() {
    $("#display").html(displayValue);
}

function clear() {
    storedValue = "0";
    displayValue = "0";
    updateDisplay();
}

function saveFirstValue() {
    storedValue = displayValue;
}

function saveResult(result) {
    if (result !== null) {
        displayValue = result;
        storedValue = "0";
        operation = null;
        updateDisplay();
    }
}

$(document).ready(function() {
$("#clear").click(function() {
    clear();
});
});

$(document).ready(function() {
$("#negate").click(function() {
    var result = negateValue(parseFloat(displayValue));
    saveResult(result);
});
});

$(document).ready(function() {
$("#percent").click(function() {
    var result = convertValueToPercentage(parseFloat(displayValue));
    saveResult(result);
});
});

$(document).ready(function() {
$(".operator").click(function() {
    saveFirstValue();
    operation = $(this).attr('id');
    console.log(`Clicked ${operation}`);
    clearOnNextInput = true;
});
});

$(document).ready(function() {
$("#equals").click(function() {
    var result = null;
    if (operation === "add") {
        result = add(parseFloat(storedValue), parseFloat(displayValue));
    } else if (operation === "subtract") {
        result = subtract(parseFloat(storedValue), parseFloat(displayValue));
    } else if (operation === "multiply") {
        result = multiply(parseFloat(storedValue), parseFloat(displayValue));
    } else if (operation === "divide") {
        result = divide(parseFloat(storedValue), parseFloat(displayValue));
    }
    saveResult(result);
    clearOnNextInput = true;
});
});

$(document).ready(function() {
$(".input").click(function(event) {
    var newChar = $(this).html().trim();
    if ((displayValue === "0" && newChar !== ".") || clearOnNextInput) {
        displayValue = "";
    }
    clearOnNextInput = false;
    displayValue = displayValue + newChar;
    updateDisplay();
});
});

//End Of Calculator