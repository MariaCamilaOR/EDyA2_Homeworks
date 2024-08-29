/*
Actividad: Parcial del corte 1

Enunciado: Modificar el algoritmo de árboles binarios, 
implementar una función para calcular la altura de un árbol.

Estudiante: María Camila Orozco Romero

Codigo: 2226220

Fuentes empleadas para el desarrollo del enunciado: 
- Documentos compartidos en clase: 
- Clase Árboles.pdf  
- https://www.youtube.com/watch?v=wpYMzeSSWVA
- https://youtube.com/shorts/6nLg5yl-X2o?si=IwL5rad_KiZhANU8
- https://youtube.com/shorts/6nLg5yl-X2o?si=Ntk_GZWseFU9n_de

*/

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
root.left.left = new TreeNode(0);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(6);
root.right.left.right = new TreeNode(7);

// estructura del árbol:
//         2
//        /  \
//      1     3
//     /    /  \
//    0     4    5
//        /  \
//       6   7

// se implementa la función maxDepth

class Solution {
    maxDepth(root) {
        if (root === null) return 0;
        
        let queue = [root];
        let level = 0;
        
        while (queue.length > 0) {
            let levelSize = queue.length;
            for (let i = 0; i < levelSize; i++) {
                let node = queue.shift();
                if (node.left !== null) queue.push(node.left);
                if (node.right !== null) queue.push(node.right);
            }
            level++;
        }
        
        return level;
    }
}

let solution = new Solution();
console.log(solution.maxDepth(root)); 
