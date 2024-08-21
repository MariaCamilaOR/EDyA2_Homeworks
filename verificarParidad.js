import { verificarParidad_RF } from './RegularFuction.js';
import { verificarParidad_AF } from './ArrowFuction.js';

const btnVerificar = document.getElementById("verificar");
let salida = document.getElementById("resultado");

btnVerificar.addEventListener("click", verificarParidad);

function verificarParidad() {
    let funcion = document.getElementById("funcion").value;
    let numero = document.getElementById("numero").value;
    let resultado;
    let tiempo;
    let res;

    if (funcion === "AF") {
        const startTime = performance.now();
        resultado = verificarParidad_AF(parseInt(numero));
        const endTime = performance.now();
        tiempo = (endTime - startTime).toFixed(8);
        res = `El número ${numero} es ${resultado} y el tiempo que se ha tomado en desarrollar su solicitud fue ${tiempo} milisegundos`;
        
    } else if (funcion === "RF") {
        const startTime = performance.now();
        resultado = verificarParidad_RF(parseInt(numero));
        const endTime = performance.now();
        tiempo = (endTime - startTime).toFixed(8);
        res = `El número ${numero} es ${resultado} y el tiempo que se ha tomado en desarrollar su solicitud fue ${tiempo} milisegundos`;
        
    }


    salida.value = res;
}
