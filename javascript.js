function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    add(num1, num2);
}

function populateDisplay() {
    const numbersAndOperators = document.querySelectorAll('.subElement');
    const resultScreen = document.querySelector('.resultScreen');

    let displayValue = 0;

    numbersAndOperators.forEach((numberOrOperator) => {
        numberOrOperator.addEventListener("click", () => {
            displayValue = numberOrOperator.textContent;
            resultScreen.innerHTML += numberOrOperator.textContent;
        });
    });

    return displayValue;
}

populateDisplay();