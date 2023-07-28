let a = 10;
try {
    a = b;  // ReferenceError
} catch (error) {
    console.log("¡Un error!"); // -> ¡Un error!
} finally {
    console.log("¡Finalmente!"); // -> ¡Finalmente!
}
console.log(a); // -> 10
