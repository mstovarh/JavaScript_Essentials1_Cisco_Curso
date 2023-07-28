let name = window.prompt("¿Cuál es tu nombre?", "Juan Pérez");
name = name ? name : "anónimo";

let age = prompt("Hola " + name + " ¿Cuántos años tienes?");
alert(name + " tiene " + age + " años");
