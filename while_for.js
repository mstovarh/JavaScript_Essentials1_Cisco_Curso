let names = [];
let isOver = false;
while (!isOver) {
    let name = prompt("Ingresa otro nombre o presiona cancelar.");
    if (name != null) {
        names.push(name);
    } else {
        isOver = true;
    }
}

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
