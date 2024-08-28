/*Desafío

Crea y maneja tu árbol genealógico hasta tu tercera pre-generación, considerando que solo hay una persona para hacer la siguiente generación (mamá o papá).

Cada persona debe tener un nombre completo y una fecha de nacimiento.
Cada persona puede tener más de un hijo.
Imprime tu árbol genealógico en preorden, postorden e inorden.
 */


// Clase Node para un árbol N-ario
class Node {
    constructor(name, birthDate) {
      this.name = name;                // Nombre completo de la persona
      this.birthDate = birthDate;      // Fecha de nacimiento
      this.children = [];              // Lista de hijos de la persona
    }
  
    // Método para verificar si un nodo es una hoja (sin hijos)
    isLeaf() {
      return this.children.length === 0;
    }
  }
  
  // Clase NaryTree para manejar un árbol N-ario
  class NaryTree {
    constructor() {
      this.root = null;                // Nodo raíz del árbol
    }
  
    // Método para buscar un nodo en el árbol por nombre
    // Método para buscar un nodo en el árbol por nombre
search(name, node = this.root) {
    if (!this.root) {
      return null;  // Retorna null si no hay raíz
    }
  
    if (this.root.name === name) {  // Verifica primero si el nombre del nodo raíz coincide
      return this.root;  // Retorna la raíz si coincide con el nombre
    } else {
      const children = node.children;  // Obtiene los hijos del nodo actual
      const inChildren = children.find(item => item.name === name);  // Busca el nombre en los hijos
  
      if (inChildren) {
        return inChildren;  // Retorna el nodo si se encuentra en los hijos
      } else {
        let foundNode = null;
        children.forEach(item => {
          if (!foundNode) {  // Si no se ha encontrado el nodo, continua la búsqueda recursiva
            foundNode = this.search(name, item);  // Busca recursivamente en los hijos
          }
        });
  
        return foundNode;  // Retorna el nodo encontrado o null
      }
    }
  }
  
  
    // Método para insertar un nuevo nodo en el árbol
    insert(name, birthDate, parentName = null) {
      const newNode = new Node(name, birthDate); // Crea un nuevo nodo con el nombre y la fecha de nacimiento
  
      if (!parentName) {
        if (!this.root) {
          this.root = newNode;        // Asigna el nuevo nodo como raíz si no hay ninguna
        } else {
          console.log("El árbol ya tiene una raíz.");
        }
      } else {
        const parentNode = this.search(parentName); // Busca el nodo padre

        
        if (parentNode) {
          parentNode.children.push(newNode); // Añade el nuevo nodo a la lista de hijos del padre
        } else {
          console.log("Padre no encontrado.");
        }
      }
    }
  
    // Método de recorrido PreOrden
    preOrder(node = this.root) {
      if (!node) return;
  
      console.log(`${node.name} (nacido el: ${node.birthDate})`); // Imprime el nombre y la fecha de nacimiento
      node.children.forEach(child => this.preOrder(child)); // Llama recursivamente a preOrder para cada hijo
    }
  
    // Método de recorrido PostOrden
    postOrder(node = this.root) {
      if (!node) return;
  
      node.children.forEach(child => this.postOrder(child)); // Llama recursivamente a postOrder para cada hijo
      console.log(`${node.name} (nacido el: ${node.birthDate})`); // Imprime el nombre y la fecha de nacimiento después de los hijos
    }
  
    // Método de recorrido InOrden
    inOrder(node = this.root) {
      if (!node) return;
  
      if (node.children.length > 0) {
        this.inOrder(node.children[0]); // Recorre recursivamente el primer hijo
      }
  
      console.log(`${node.name} (nacido el: ${node.birthDate})`); // Imprime el nombre y la fecha de nacimiento del nodo actual
  
      for (let i = 1; i < node.children.length; i++) {
        this.inOrder(node.children[i]); // Recorre recursivamente los otros hijos
      }
    }
  }
  
  // Crear el árbol genealógico
  const familyTree = new NaryTree();
  
  // Insertando la raíz (abuelito)
  familyTree.insert('Pacomio de Jesus', '1948-12-15');
  
  // Insertando hijos de Pacomio de Jesus
  familyTree.insert('Freddy', '1962-12-11', 'Pacomio de Jesus'); // Papa
  familyTree.insert('Magda', '1971-08-04', 'Pacomio de Jesus'); // Mama
  
  // Insertando hijos de Freddy
  familyTree.insert('Camilo', '1995-07-30', 'Freddy'); // Mi hermanito
  familyTree.insert('Jose', '2020-06-06', 'Freddy'); // Mi hermanito muerto
  
  // Insertando hijo de Magda
  familyTree.insert('Camila', '2004-09-06', 'Magda'); // Yo
  
  // Imprimir el árbol genealógico en PreOrden, PostOrden y InOrden
  console.log("PreOrden:");
  familyTree.preOrder();
  
  console.log("\nPostOrden:");
  familyTree.postOrder();
  
  console.log("\nInOrden:");
  familyTree.inOrder();
  