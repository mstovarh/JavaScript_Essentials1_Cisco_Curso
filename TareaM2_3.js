var a = true;
var b = 12;
var c = 23n;
var d = "abc";
var e = undefined;
var f = null;

console.log(typeof a, " : " ,a)
console.log(typeof b, " : " ,b)
console.log(typeof c, " : " ,c)
console.log(typeof d, " : " ,d)
console.log(typeof e, " : " ,e)
console.log(typeof f, " : " ,f)

function imprimir (){
    return console.log(g);
}

var g = "1234"
imprimir();
var g = Number(g);
imprimir();
var g = BigInt(g);
imprimir();
var g = Boolean(g);
imprimir();

var str1 = 42 + Number("1")
console.log(str1)