const num1_input = document.getElementById(`num1`);
const num2_input = document.getElementById(`num2`);
const result_field = document.getElementById(`result`);

function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    let result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

function divde(num1, num2) {
    let result = num1 / num2;
    return result;
}

function modulus(num1, num2) {
    let result = num1 % num2;
    return result;
}

function squareroot(num1, num2) {
    let result =
}

function getNum1() {
    return parseFloat(num1_input.value);
}

function getNum2() {
    return parseFloat(num2_input.value);
}

function addclick() {
    let x = getNum1();

    let y = getNum2();

    let result = add(x, y);

    return result_field.value = result;
}

function subclick() {
    let x = getNum1();

    let y = getNum2();

    let result = subtract(x, y);

    result_field.value = result;
}
function mulclick() {
    let x = getNum1();

    let y = getNum2();

    let result = multiply(x, y);

    result_field.value = result;
}

function divclick() {
    let x = getNum1();

    let y = getNum2();

    let result = divde(x, y);

    result_field.value = result;
}