var currentInput = "0"
var memory = "0"
var Operator = 0;

// Display the current input
// Written by Nicole Stein
function displayCurrentInput() {
    document.getElementById('screen').value = currentInput;
}

// Add a digit to the current digit
// Written by Olivia Hardwidge
function addDigit(dig) {
    if ((eval(currentInput) == 0) && (currentInput.indexOf(".") == -1)) {
        currentInput = dig;

    } else if (currentInput.length <= 11) {
        currentInput = currentInput + dig;
    }
    displayCurrentInput();
}

// Add a decimal to the current input
// Written by Olivia Hardwidge
function addDecimal() {
    if (currentInput.length == 0) {
        currentInput = "0.";
    } else {
        if (currentInput.indexOf(".") == -1) {
        currentInput = currentInput + ".";
    }
    }
    displayCurrentInput();
}

//changing the sign of input
// Written by Nicole Stein
function changeSign() {
    currentInput = currentInput * (-1);
    displayCurrentInput;
}

// clear button clears back to 0
// Written by Nicole Stein
function clears() {
    currentInput = "0";
    displayCurrentInput();
}

//clears everything on display
// Written by Nicole Stein
function allClear() {
    currentInput = "0";
    Operator = 0;
    memory = "0";
    displayCurrentInput();
}

// Change the current input to a percentage
// Written by Nicole Stein
function percentage() {
    currentInput = currentInput / 100;
    displayCurrentInput();
}

// Calculate the square of the current input
// Written by Nicole Stein
function square() {
    currentInput = Math.pow(currentInput, 2);
    displayCurrentInput();
}

// Calculate the square root of the current input
// Written by Nicole Stein
function squareRoot() {
    currentInput = Math.sqrt(currentInput);
    displayCurrentInput();
}

// Calculate the inverse of the current input
// Written by Nicole Stein
function inverse() {
    currentInput = 1 / currentInput;
    displayCurrentInput();
}

// cos function
// Written by Nicole Stein
function cosRadian() {
    currentInput = Math.cos(currentInput);
    displayCurrentInput();
}

// sin function
// Written by Nicole Stein
function sinRadian() {
    currentInput = Math.sin(currentInput);
    displayCurrentInput();
}

// tan function
// Written by Nicole Stein
function tanRadian() {
    currentInput = Math.tan(currentInput);
    displayCurrentInput();
}

//cos inverse
// Written by Nicole Stein
function acos() {
    currentInput = Math.acos(currentInput);
    displayCurrentInput();
}

//sin inverse
// Written by Nicole Stein
function asin() {
    currentInput = Math.asin(currentInput);
    displayCurrentInput();
}

//tan inverse
// Written by Nicole Stein
function atan() {
    currentInput = Math.atan(currentInput);
    displayCurrentInput();
}

// stores last operaor pushed for mult div add sub
// Written by Olivia Hardwidge
function storeOperator(op) {
    if (op.indexOf("*") > -1) {
        Operator = 1;
    };
    //multiply
    if (op.indexOf("/") > -1) {
        Operator = 2;
    };
    //divide
    if (op.indexOf("+") > -1) {
        Operaor = 3;
    };
    //addition
    if (op.indexOf("-") > -1) {
        Operator = 4;
    };
    memory = currentInput;
    currentInput = "0";
    displayCurrentInput();
}

// calculate using operator
// Written by Olivia Hardwidge
function calculate() {
    if (Operator == 1) {
        currentInput = eval(memory) * eval(currentInput);
    };
    if (Operator == 2) {
        if (currentInput == 0) {
            currentInput = "Divide by 0 error"
        } else {
            currentInput = currentInput = eval(memory) / eval(currentInput);
        }
    };
    if (Operator == 3) {
        currentInput = eval(memory) + eval(currentInput);
    };
    if (Operator == 4) {
        currentInput = eval(memory) - eval(currentInput);
    };
    Operator = 0;
    memory = "0";
    displayCurrentInput();
}
