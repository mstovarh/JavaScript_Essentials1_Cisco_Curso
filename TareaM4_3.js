let firstNumber = Number(prompt("Introduce el primer número: "));
let secondNumber = Number(prompt("Introduce el segundo número: "));
let operand = prompt("Introduce el operando (+, -, * o /)");
let result;

if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    switch (operand) {
        case "+": result = firstNumber + secondNumber; break;
        case "-": result = firstNumber - secondNumber; break;
        case "*": result = firstNumber * secondNumber; break;
        case "/": result = firstNumber / secondNumber; break;
        default: result = "Error: operando desconocido";
    }
} else {
    result = "Error: al menos uno de los valores ingresados no es un número";
}
alert(result);