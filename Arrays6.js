let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names);
console.log(names.indexOf("Mateo")); // -> 2
console.log(names.indexOf("Victor")); // -> -1 -> No existe
names.unshift("Amelia");
console.log(names.indexOf("Amelia")); // -> 0
console.log(names);

