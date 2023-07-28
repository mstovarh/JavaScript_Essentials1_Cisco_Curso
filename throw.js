console.log("inicio"); // -> inicio
try {
    throw 100;
} catch (error) {
    console.log(error); // -> 100
}
console.log("fin"); // -> fin
