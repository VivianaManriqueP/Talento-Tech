alert("Este programa te indica si un número es par o impar");
let n = Number (prompt("Ingresa un número entero: "));
let residuo = n % 2;
let mensaje = "";
if (Number.isInteger(n)) 
    {if (residuo == 0){mensaje = "El número "+n+" es par."}
    else{mensaje = "El número "+n+" es impar."} }
else{mensaje = "El número " +n+ " no es entero. Por lo tanto, no es par ni impar."}
alert(mensaje)