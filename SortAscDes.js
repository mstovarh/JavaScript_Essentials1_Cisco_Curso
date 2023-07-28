let x = [123, 345, 678, 2346];
x. sort(cmp);

/*let cmp = (a,b) => a - b;
console.log("Asc: " + x);*/
let cmp = (a ,b) => b - a;
console.log("Des: " + x);