let ancho = window.prompt("¿Cuál es el ancho?", 20);

ancho = ancho ? ancho : " ";

let alto = window.prompt("¿Cuál es el alto?", 10);

alto = alto ? alto : " ";

let largo = window.prompt("¿Cuál es el largo?", 50);

largo = largo ? largo : " ";

alert("el volumen es: " + ancho*largo*alto);