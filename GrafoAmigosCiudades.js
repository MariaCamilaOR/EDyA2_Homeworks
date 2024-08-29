/*
Desafío: Grafo de Amigos y Ciudades

Crea y maneja un nuevo grafo de amigos y ciudades.

✓ Cada persona debe ser un nodo, y cada ciudad también.
✓ Cada persona debe tener nombre y edad, y debe estar referenciada a una ciudad.
✓ Cada ciudad debe tener un nombre.
✓ Imprime la lista de personas que viven en una ciudad particular.
*/

class Grafo {
  constructor() {
    this.nodos = [];  // Inicializa la lista de nodos
    this.listaAdyacencia = {};  // Inicializa la lista de adyacencia como un objeto
  }

  // Método para agregar un nodo al grafo
  agregarNodo(nodo) {
    this.nodos.push(nodo);  // Añade el nodo a la lista de nodos
    this.listaAdyacencia[nodo] = [];  // Inicializa una lista vacía para las conexiones de este nodo
  }

  // Método para agregar una arista entre dos nodos
  agregarArista(nodo1, nodo2) {
    this.listaAdyacencia[nodo1].push(nodo2);  // Añade nodo2 a la lista de adyacencia de nodo1
    this.listaAdyacencia[nodo2].push(nodo1);  // Añade nodo1 a la lista de adyacencia de nodo2 (si es no dirigido)
  }

  // Método para imprimir la lista de adyacencia del grafo
  imprimirGrafo() {
    console.log(this.listaAdyacencia);
  }

  // Método para buscar un nodo en el grafo
  buscarNodo(valor) {
    if (!this.nodos.length) {
      return;  // Retorna si no hay nodos en el grafo
    }
    return this.nodos.find(item => item === valor);  // Busca y retorna el nodo si existe
  }

  // Método para imprimir la lista de adyacencia de un nodo específico
  imprimirAdyacencia(valor) {
    if (this.buscarNodo(valor)) {
      console.log(this.listaAdyacencia[valor]);  // Imprime la lista de adyacencia del nodo si existe
    } else {
      return;  // Retorna si el nodo no existe en el grafo
    }
  }

  // Método para agregar una persona y su referencia a una ciudad
  agregarPersona(nombre, edad, ciudad) {
    const nodoPersona = `${nombre}, ${edad} años`;  // Crea un nodo con nombre y edad de la persona
    this.agregarNodo(nodoPersona);  // Agrega la persona como un nodo
    if (!this.buscarNodo(ciudad)) {
      this.agregarNodo(ciudad);  // Agrega la ciudad como nodo si no existe
    }
    this.agregarArista(nodoPersona, ciudad);  // Crea una arista entre la persona y la ciudad
  }

  // Método para imprimir personas que viven en una ciudad específica
  imprimirPersonasEnCiudad(ciudad) {
    if (!this.buscarNodo(ciudad)) {
      console.log(`Ciudad ${ciudad} no encontrada en el grafo.`);
      return;
    }
    const personas = this.listaAdyacencia[ciudad].filter(nodo => nodo.includes('años'));
    console.log(`Personas en ${ciudad}:`, personas);
  }
}

// Ejemplo de uso
const grafo = new Grafo();

// Agregando personas y ciudades
grafo.agregarPersona('Juan', 30, 'Medellín');
grafo.agregarPersona('Ana', 25, 'Bogotá');
grafo.agregarPersona('Carlos', 40, 'Bogotá');
grafo.agregarPersona('Lucía', 35, 'Medellín');

// Imprimiendo la lista de adyacencia completa del grafo
grafo.imprimirGrafo();

// Imprimiendo la lista de personas que viven en una ciudad específica
grafo.imprimirPersonasEnCiudad('Bogotá');
grafo.imprimirPersonasEnCiudad('Medellín');
