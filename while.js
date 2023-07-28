let isOver = false;
let counter = 1;

while (isOver != true) {
    let continueLoop = confirm(`[${counter}] ¿Continuar en el bucle?`);
    isOver = continueLoop === true ? false : true;
    counter = counter + 1;
}
