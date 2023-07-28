n_f = prompt("Ingrese inicio");
n_i = prompt("Ingrese final");

if(n_f>n_i && !isNaN(n_f) && !isNaN(n_i)){
    for (let i = n_f; i >= n_i; i-=10) { console.log(i); }
}else{
    alert("Valores introducidos invalidos, v1>v2")
}
