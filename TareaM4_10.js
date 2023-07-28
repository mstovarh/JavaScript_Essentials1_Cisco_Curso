while (true) {
    let firstNumber = prompt("Introduce el primer número");
    let secondNumber = prompt("Introduce el segundo número");
    let operand = prompt("Introduce el operando (+, -, * o /)");
    let result;

    if (firstNumber === "S" || secondNumber === "S" || operand === "S") {
        break;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
        switch (operand) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            default:
                result = "Error: operando desconocido";
        }
    } else {
        result = "Error:al menos uno de los valores introducidos no es un número";
    }
    alert(result);
}