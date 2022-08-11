function solicitarNombreUsuario() {
    let nombreUsuario = prompt("Ingresar nombre");
    alert(" Bienvenido " + nombreUsuario + " a " + " BarbiCook ");
  }
  
  solicitarNombreUsuario();
  
  let entrada = prompt("ingrese el producto buscado en letra minuscula").toUpperCase();
  while (entrada != "salida") {
    switch (entrada) {
      case "pasteleria":
        alert("Aqui encontraras la mejor calidad y a buen precio");
        break;
      case "lemon pie":
        alert("tenemos los mejores sabores y productos de calidad");
        break;
      case "chocotorta":
        alert("tenemos los mejores sabores y productos de calidad");
        break;
      default:
        alert("Para salir ingresa la palabra salida");
    }
    entrada = prompt("Ingrese el producto buscado en letra minuscula");
  }
  
  let nombre = "Chocotorta";
  let cantidad = 2;

  let producto = "Lemon Pie"
  let numero = 3

  
  let precioPasteleria;
  
  if (producto == "Lemon Pie") {
    precioPasteleria= 1400;
  } 
  
  let precioFinal = numero * precioPasteleria;
  
  console.log(" Tiene que pagar " + precioFinal + " Pesos ");



  let precioProducto;
  
  if (nombre == "Chocotorta") {
    precioProducto = 1200;
  } 
  
  let precioTotal = cantidad * precioProducto;
  
  console.log(" Tiene que pagar " + precioTotal + " Pesos ");
  
  function calcularIVA(precio, iva) {
    return (precio / 100) * iva;
  }
  
  console.log(calcularIVA(2400, 21));