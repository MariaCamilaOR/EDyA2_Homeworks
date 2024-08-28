class Tarea {
    constructor(titulo, descripcion) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.siguiente = null;
    }
}

class ListaDeTareas {
    constructor() {
        this.head = null;
    }

    append(titulo, descripcion) {
        const nuevaTarea = new Tarea(titulo, descripcion);

        if (this.head === null) {
            this.head = nuevaTarea;
        } else {
            let actual = this.head;
            while (actual.siguiente !== null) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevaTarea;
        }
    }

    imprimirTareas() {
        let actual = this.head;
        while (actual !== null) {
            console.log(`Título: ${actual.titulo}\nDescripción: ${actual.descripcion}\n`);
            actual = actual.siguiente;
        }
    }
}


const listaDeTareas = new ListaDeTareas();

listaDeTareas.append("Comprar comestibles", "Comprar leche, huevos y pan.");
listaDeTareas.append("Estudiar JavaScript", "Repasar clases y listas enlazadas.");
listaDeTareas.append("Ir al gimnasio", "Entrenamiento de cardio y pesas.");

listaDeTareas.imprimirTareas();

