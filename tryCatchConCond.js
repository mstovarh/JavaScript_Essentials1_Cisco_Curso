let a = -2;
try {
    a = b;
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference error, restablecer a a -2"); // -> Reference error, restablecer a a -2
        a = -2;
    } else {
        console.log("Otro error - " + error);
    }
}
console.log(a); // -> -2
