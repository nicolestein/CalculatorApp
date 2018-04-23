var currentInput = "0"
var memory = "0"

// Display the current input
function displayCurrentInput() {
    document.getElementById('screen').value = currentInput;
}

// Add a digit to the current digit
function addDig(dig) {
}


// Add a decimal to the current input
function addDecimal() {
    if (currentInput.length == 0){
    }
}


//changing the sign of input
function changeSign(){
    currentInput = currentInput*(-1);
    displayCurrentInput;


}
// clear button clears back to 0
function clears(){


currentInput "0";
displayCurrentInput;
}
//clears everything on display
function allClear(){
    currentInput = "0";
    memory = "0";
    displayCurrentInput;

}

//square of input

