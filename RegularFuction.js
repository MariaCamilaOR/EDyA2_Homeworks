// Regular Function

function verificarParidad_RF(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

export{verificarParidad_RF}

/*
  // Ingresar un número
  const numeroIngresado = prompt("Ingresa un número:");
  // Llamar a la función
  verificarParidad_RF(Number(numeroIngresado));
  */
