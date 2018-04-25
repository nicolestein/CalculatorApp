var currentInput = "0"
var memory = "0"
var operation = 0;

// Display the current input
function displayCurrentInput() {
    document.getElementById('screen').value = currentInput;
}

// Add a digit to the current digit
function addDig(dig) {

}

// Add a decimal to the current input
function addDecimal() {
    if (currentInput.length == 0) {
        currentInput = "0.";
    } else {
        if currentInput.indexOf(".") == -1 {
            currentInput = currentInput + ".";
        }
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
    currentInput "0";
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
 currentInput = currentInput/100;
displayCurrentInput();
}

// Calculate the factorial of the current input
function factorial() {
var input = currentInput;
var x = input;
for (i = input-1; i > 1; i--) {
    x = x*i;
}
currentInput = x;
console.log(currentInput);
displayCurrentInput();
}

// Calculate the square of the current input
function square() {
 currentInput = Math.pow(currentInput,2);
    displayCurrentInput();
}

// Calculate the square root of the current input
function squareRoot() {
   currentInput = Math.sqrt(currentInput);
    displayCurrentInput();
}

// Calculate the inverse of the current input
function inverse() {
currentInput = 1/currentInput;
displayCurrentInput();
}

// cos function


// sin function


// tan function

