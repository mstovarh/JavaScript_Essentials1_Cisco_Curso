let gate = prompt("Elige una puerta: a, b, o c");
let win = false;

switch (gate) {
    case "a":
    case "A":
    case 1:
    case "1":
        alert("Puerta A: Vacía");
        break;
    case "b":
    case "B":
    case 2:
    case "2":
        alert("Puerta B: Premio Mayor");
        win = true;
        break;
    case "c":
    case "C":
    case 3:
    case "3":
        alert("Puerta C: Vacía");
        break;
    default:
        alert("No existe la puerta " + String(gate));
}

if (win) {
    alert("¡Ganador!");
}
