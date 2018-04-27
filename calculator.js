var currentInput = "0"
var memory = "0"
var operation = 0;

// Display the current input
function displayCurrentInput() {
    document.getElementById('screen').value = currentInput;
}

// Add a digit to the current digit
function addDig(dig) {
    if ((eval(currentInput) == 0) && (currentInput.indexOf(".") == -1)) {
        currentInput = dig;

    } else if (currentInput.length <= 11) {
        currentInput = currentInput + dig;
    }
    displayCurrentInput();
}

// Add a decimal to the current input
function addDecimal() {
    if (currentInput.length == 0) {
        currentInput = "0.";
    } else if (currentInput.indexOf(".") == -1) {
        currentInput = currentInput + ".";
    }
    displayCurrentInput();
}

//changing the sign of input
function changeSign() {
    currentInput = currentInput * (-1);
    displayCurrentInput;
}

// clear button clears back to 0
function clears() {
    currentInput = "0";
    displayCurrentInput();
}

//clears everything on display
function allClear() {
    currentInput = "0";
    memory = "0";
    displayCurrentInput;
}

// Change the current input to a percentage
function percentage() {
    currentInput = currentInput / 100;
    displayCurrentInput();
}

// Calculate the factorial of the current input
function factorial() {
    var input = currentInput;
    var x = input;
    for (i = input - 1; i > 1; i--) {
        x = x * i;
    }
    currentInput = x;
    console.log(currentInput);
    displayCurrentInput();
}

// Calculate the square of the current input
function square() {
    currentInput = Math.pow(currentInput, 2);
    displayCurrentInput();
}

// Calculate the square root of the current input
function squareRoot() {
    currentInput = Math.sqrt(currentInput);
    displayCurrentInput();
}

// Calculate the inverse of the current input
function inverse() {
    currentInput = 1 / currentInput;
    displayCurrentInput();
}

// cos function
function cosRadian() {
    currentInput = Math.cos(currentInput);
    displayCurrentInput();
}

// sin function
function sinRadian() {
    currentInput = Math.sin(currentInput);
    displayCurrentInput();
}

// tan function
function tanRadian() {
    currentInput = Math.tan(currentInput);
    displayCurrentInput();
}

//cos inverse
function acos() {
    currentInput = Math.acos(currentInput);
    displayCurrentInput();
}

//sin inverse
function asin() {
    currentInput = Math.asin(currentInput);
    displayCurrentInput();
}

//tan inverse
function atan() {
    currentInput = Math.atan(currentInput);
    displayCurrentInput();
}

// stores last operaor pushed for mult div add sub
function storeOperator(op) {
    if (op.indexOf("*") > -1) {
        operator = 1;
    };
    //multiply
    if (op.indexOf("/") > -1) {
        operator = 2;
    };
    //divide
    if (op.indexOf("+") > -1) {
        operaor = 3;
    };
    //addition
    if (op.indexOf("-") > -1) {
        operator = 4;
    };
    if (op.indexOf("^") > -1) {
        operator = 5;
    };
    memory = currentInput;
    //store value
    currentInput = "0";
    displayCurrentInput();
}

// calculate using operator
function calculate() {
    if (operator == 1) {
        currentInput = eval(memory) * eval(currentInput);
    };
    if (opeator == 2) {
        if (currentInput == 0) {
            currentInput = "Divide by 0 error"
        } else {
            currentInput = currentInput = eval(memory) / eval(currentInput);
        }
    };
    if (operator == 3) {
        currentInput = eval(memory) + eval(currentInput);
    };
    if (operator == 4) {
        currentInput = eval(memory) - eval(currentInput);
    };
    if (operator == 5) {
        currentInput = Math.pow(eval(memory), eval(currentInput));
    };
    operator = 0; // clears
    displayCurrentInput();
}
