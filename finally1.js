let a = 10;
try {
    a = b; // Primer ReferenceError
} catch (error) {
    try {
        console.log(b); // Segundo ReferenceError
    } catch {
        console.log("¡Segundo catch!"); // -> ¡Segundo catch!
    }
} finally {
    console.log("¡Finalmente!"); // -> ¡Finalmente!
}
