function solicitarNombreUsuario () 
{
let nombreUsuario = prompt ("INGRESAR NOMBRE")
alert (" Bienvenido " + nombreUsuario + " a " + " BarbiCook" )
}

solicitarNombreUsuario ()

function cuadrado(numero) {
    return numero * numero;
}

console.log(cuadrado(9));

let numeros = [1, 2, 3, 10, 40];
function sumarArreglo(arreglo){
let sumaTotal = 0;
for (let i=0; i < arreglo.length; i++) {
    sumaTotal += arreglo [i];
}
return sumaTotal;
}

console.log(sumarArreglo(numeros));

