function getElement(elements, index) {
    return elements[index];
}
let names = ["Alice", "Bob", "Eve", "John"];
let vue = [23, 34, "x", "Roxana"];

let v = getElement(vue, 3);
let name = getElement(names, 3);
console.log(name); 
console.log(v);