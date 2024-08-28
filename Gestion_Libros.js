/* 
Crear y gestionar una nueva pila de libros.

Cada libro debe tener su Nombre, ISBN, Autor y Editorial.
Llenar la pila con algunos ejemplos de datos.
*/

console.log(`Crear y gestionar una nueva pila de libros. \n
    Cada libro debe tener su Nombre, ISBN, Autor y Editorial.\n
    Llenar la pila con algunos ejemplos de datos.\n`);
    
    class Pila {
      constructor() {
        this.stack = []; // Se inicializa un array vacío que representará la pila.
      }
    
      // Método para agregar un elemento a la pila
      push(elemento) {
        this.stack.push(elemento); // Agrega el elemento al final del array (parte superior de la pila).
        return this.stack; // Devuelve la pila actualizada.
      }
    
      // Método para remover y devolver el último elemento agregado a la pila
      pop() {
        if (this.stack.length === 0) { // Verifica si la pila está vacía comprobando la longitud del array.
          return "Lista vacía."; // Si la pila está vacía, devuelve un mensaje indicando esto.
        }
        return this.stack.pop(); // Si no está vacía, remueve y devuelve el último elemento agregado.
      }
    
      // Método para ver el último elemento agregado a la pila sin removerlo
      peek() {
        if (this.stack.length === 0) { // Verifica si la pila está vacía comprobando la longitud del array.
          return "Lista vacía."; // Si la pila está vacía, devuelve un mensaje indicando esto.
        }
        return this.stack[this.stack.length - 1]; // Si no está vacía, devuelve el último elemento agregado sin removerlo.
      }
    
      // Método para obtener el tamaño actual de la pila
      size() {
        return this.stack.length; // Devuelve la longitud del array, que corresponde al número de elementos en la pila.
      }
    
      // Método para imprimir (devolver) todos los elementos de la pila
      print() {
        return this.stack; // Devuelve el array que representa la pila.
      }
    }
    
    // Ejemplo de uso de la clase Pila
    let pilaLibros = new Pila(); // Se crea una nueva instancia de la clase Pila (una pila vacía).
    
    console.log(pilaLibros.size()); // 0
    
    console.log(pilaLibros.push({
      nombre: "El Principito",
      isbn: "978-0156012195",
      autor: "Antoine de Saint-Exupéry",
      editorial: "Reynal & Hitchcock"
    })); // Se agrega el primer libro y se muestra la pila actualizada
    
    console.log(pilaLibros.size()); // 1
    
    console.log(pilaLibros.peek()); // Devuelve el libro "El Principito"
    
    console.log(pilaLibros.push({
      nombre: "Cien Años de Soledad",
      isbn: "978-0307474728",
      autor: "Gabriel García Márquez",
      editorial: "Editorial Sudamericana"
    })); // Se agrega el segundo libro y se muestra la pila actualizada
    
    console.log(pilaLibros.size()); // 2
    
    console.log(pilaLibros.print()); // Imprime la pila actual con los dos libros
    
    console.log(pilaLibros.peek()); // Devuelve el libro "Cien Años de Soledad"
    
    console.log(pilaLibros.pop()); // Remueve y devuelve el libro "Cien Años de Soledad"
    
    console.log(pilaLibros.print()); // Imprime la pila actual, que contiene solo "El Principito"
    
    console.log(pilaLibros.size()); // 1
    
    console.log(pilaLibros.peek()); // Devuelve el libro "El Principito"
    