var calcForm = document.querySelector('#calcForm');

function add(num1, num2) {
     return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function modulo(num1, num2) {
    return num1 % num2;
}
calcForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var operation = document.querySelector('#operation');
    var answer = document.querySelector('#answer');
    var num1 = document.querySelector('input[name="num1"]').value;
    var num2 = document.querySelector('input[name="num2"]').value;

    switch(operation.value) {
        case "add":
            answer.innerHTML = add(parseInt(num1), parseInt(num2));
            break;
        case "sub":
            answer.innerHTML = sub(parseInt(num1), parseInt(num2));
            break;
        case "multiply":
            answer.innerHTML = multiply(parseInt(num1), parseInt(num2));
            break;
        case "divide":
            answer.innerHTML = divide(parseInt(num1), parseInt(num2));
                        break;
        case "modulo":
            answer.innerHTML = modulo(parseInt(num1), parseInt(num2));
            break;

    }
})