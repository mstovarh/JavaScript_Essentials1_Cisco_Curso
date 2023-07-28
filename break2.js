let gate = prompt("Elige una puerta: a, b, o c");
let win = false;

switch (gate) {
    case "a": {
        let message = "Puerta A";
        console.log(message);
        break;
    }
    case "b": {
        let message = "Puerta B";
        console.log(message);
        break;
    }
    case "c": {
        let message = "Puerta C";
        console.log(message);
        break;
    }
    default:
        alert("No existe la puerta " + String(gate));
}

if (win) {
    alert("¡Ganador!");
}
