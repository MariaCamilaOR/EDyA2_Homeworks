console.log(`Desafío:
    Crear y gestionar una nueva cola de personas en un cajero automático.
    Cada persona en el cajero automático debe tener su nombre y hora de llegada.
    Llenar la cola con algunos ejemplos de datos.

    Adicional metodo que los inserte en orden de llegada 
    `)
    
    class LaPeople {
        constructor(nombre, horaLLegada) {
            this.nombre = nombre;
            this.horaLLegada = horaLLegada;
        }
    }
    
    class Queue {
        constructor() {
            this.queue = [];
        }
    
        // Método para insertar en orden de llegada
        enqueue(LaPeople) {
            if (this.isEmpty()) {
                this.queue.push(LaPeople);
            } else {
                let added = false;
                for (let i = 0; i < this.queue.length; i++) {
                    if (this.queue[i].horaLLegada > LaPeople.horaLLegada) {
                        this.queue.splice(i, 0, LaPeople);
                        added = true;
                        break;
                    }
                }
                if (!added) {
                    this.queue.push(LaPeople);
                }
            }
            return this.queue;
        }
    
        dequeue() {
            return this.queue.shift();
        }
    
        peek() {
            return this.queue[0];
        }
    
        size() {
            return this.queue.length;
        }
    
        isEmpty() {
            return this.queue.length === 0;
        }
    
        print() {
            console.log("Cola de personas:");
            //return this.queue
            this.queue.forEach((persona, index) => {
                console.log(`${index + 1}. ${persona.nombre} - Hora de Llegada: ${persona.horaLLegada}`);
            });
        }
    }
    
    // Crear una nueva cola
    const queue = new Queue();
    
    queue.enqueue(new LaPeople("Ana", "09:05 AM"));
    queue.enqueue(new LaPeople("Carlos", "09:10 AM"));
    queue.enqueue(new LaPeople("María", "09:15 AM"));
    queue.enqueue(new LaPeople("Juan", "09:00 AM"));
    
    // Imprimir la cola actual
    queue.print();
    
    // Ver la primera persona en la cola sin removerla
    console.log("Primera persona en la cola (peek):");
    console.log(queue.peek());
    
    // Remover a la primera persona de la cola y mostrarla
    console.log("Atendiendo a la primera persona (dequeue):");
    console.log(queue.dequeue());
    
    // Imprimir el tamaño actual de la cola
    console.log(`Tamaño actual de la cola: ${queue.size()}`);
    
    // Imprimir la cola después de remover a la primera persona
    queue.print();
    













