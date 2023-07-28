function div(a, b) {
    if (b == 0) {
        throw new RangeError("No se puede dividir entre 0");
    }
    return a / b;
}
console.log(div(4, 2)); // -> 2
console.log(div(4, 0)); // -> Uncaught RangeError: No se puede dividir entre 0