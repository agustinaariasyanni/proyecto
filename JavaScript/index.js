function solicitarNombreUsuario () 
{
let nombreUsuario = prompt ("INGRESAR NOMBRE")
alert (" Bienvenido " + nombreUsuario + " a " + " BarbiCook" )
}

solicitarNombreUsuario ()

function cuadrado(numero) {
    return numero * numero;
}

console.log(cuadrado(2));

var numeros = [1, 2, 3, 10, 20];
function sumarArreglo(arreglo){
var sumaTotal = 0;
for (var i=0; i < arreglo.length; i++) {
    sumaTotal += arreglo [i];
}
return sumaTotal;
}

console.log(sumarArreglo(numeros));