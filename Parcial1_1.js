/*
Actividad: Parcial del corte 1

Enunciado: Implementar una función que tenga como 
parámetros dos listas enlazadas de números ordenados 
de mayor a menor y que retorne una nueva lista con la 
unión de ambas y sus elementos ordenados de menor a mayor.

Estudiante: María Camila Orozco Romero

Codigo: 2226220

Fuentes empleadas para el desarrollo del enunciado: 
- Documentos compartidos en clase: 
-Clase Listas.pdf  
-Clase 01 - JS.pdf
- Enlaces de google:
- https://www.freecodecamp.org/espanol/news/ordenar-arreglos-en-javascript-como-usar-el-metodo-sort/
Todo lo que necesitamos es usar la función de comparación dentro del método sort():
const numeros = [3, 23, 12];
numeros.sort(function(a, b){return a - b}); // --> 3, 12, 23
Si queremos ordenar los números en orden descendente, esta vez necesitamos 
const numeros = [3, 23, 12];
numeros.sort(function(a, b){return b - a}); // --> 23, 12, 3
*/

class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
        this.cola = null;
    }

    agregarNodo(nodo_valor) {
        const nuevo_nodo = new Nodo(nodo_valor);

        if (!this.cabeza) {
            this.cabeza = nuevo_nodo;
        } else {
            this.cola.siguiente = nuevo_nodo;
        }

        this.cola = nuevo_nodo;
    }

    imprimirLista() {
        let nodo_actual = this.cabeza;
        while (nodo_actual !== null) {
            console.log(`Valor: ${nodo_actual.valor}`);
            nodo_actual = nodo_actual.siguiente;
        }
    }

    ordenarASC() {
        if (!this.cabeza) return;

        let valores = [];
        let nodo_actual = this.cabeza;

        while (nodo_actual !== null) {
            valores.push(nodo_actual.valor);
            nodo_actual = nodo_actual.siguiente;
        }

        valores.sort((a, b) => a - b);

        nodo_actual = this.cabeza;
        for (let valor of valores) {
            nodo_actual.valor = valor;
            nodo_actual = nodo_actual.siguiente;
        }
    }

    ordenarDESC() {
        if (!this.cabeza) return;

        let valores = [];
        let nodo_actual = this.cabeza;

        while (nodo_actual !== null) {
            valores.push(nodo_actual.valor);
            nodo_actual = nodo_actual.siguiente;
        }

        valores.sort((a, b) => b - a);

        nodo_actual = this.cabeza;
        for (let valor of valores) {
            nodo_actual.valor = valor;
            nodo_actual = nodo_actual.siguiente;
        }
    }
}

function unirYOrdenarListas(lista1, lista2) {
    let lista_combinada = new ListaEnlazada();

    let nodo_actual = lista1.cabeza;
    while (nodo_actual) {
        lista_combinada.agregarNodo(nodo_actual.valor);
        nodo_actual = nodo_actual.siguiente;
    }

    nodo_actual = lista2.cabeza;
    while (nodo_actual) {
        lista_combinada.agregarNodo(nodo_actual.valor);
        nodo_actual = nodo_actual.siguiente;
    }

    lista_combinada.ordenarASC();

    return lista_combinada;
}

// Crear listas enlazadas
let lista1 = new ListaEnlazada();
lista1.agregarNodo(4);
lista1.agregarNodo(9);
lista1.agregarNodo(-1);

let lista2 = new ListaEnlazada();
lista2.agregarNodo(1);
lista2.agregarNodo(3);
lista2.agregarNodo(7);

// Ordenar listas antes de imprimirlas
lista1.ordenarDESC();
lista2.ordenarDESC();

// Imprimir listas antes de la unión
console.log("Lista 1 antes de la unión:");
lista1.imprimirLista();
console.log("Lista 2 antes de la unión:");
lista2.imprimirLista();

// Unir y ordenar las listas
let lista_ordenada = unirYOrdenarListas(lista1, lista2);

// Imprimir la lista combinada y ordenada
console.log("Lista combinada y ordenada:");
lista_ordenada.imprimirLista();