// 1. at() 

// Devuelve el elemento en el índice especificado
const arr = [1, 2, 3, 4, 5];
console.log(arr.at(2)); // 3

// 2. concat() 

// Combina dos o más arrays y devuelve un nuevo array
const arr2 = [6, 7, 8];
const concatenatedArray = arr.concat(arr2);
console.log(concatenatedArray); // [1, 2, 3, 4, 5, 6, 7, 8]

// 3. constructor - Array()

// Crea una nueva instancia de Array
const colors = new Array('red', 'green', 'blue');
console.log(colors); // ['red', 'green', 'blue']

// 4. copyWithin() 

// Copia una parte del array a otra ubicación en el mismo array
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Copia los elementos desde el índice 2 (sin el 2, cherry) hasta el final, y los coloca a partir del índice 0
const copiedFruits = fruits.copyWithin(0, 2);
console.log(copiedFruits); // ['cherry', 'date', 'elderberry', 'date', 'elderberry']

// 5. entries() 
// Devuelve un nuevo objeto Array Iterator que contiene pares clave/valor

const fruits = ['apple', 'banana', 'cherry'];
const fruitIterator = fruits.entries();

for (let pair of fruitIterator) {
  console.log(pair);
}
// Salida:
// [0, 'apple']
// [1, 'banana']
// [2, 'cherry']

// Otra forma 
let arr = [1,2,3,4]
const iterator = arr.entries();
for (let e of iterator) {
  console.log(e);
}


// 6. every() 
// Comprueba si todos los elementos en el array pasan una prueba especificada

let arr = [1,2,3,4]
const allAboveZero = arr.every(num => num > 0);
console.log(allAboveZero); // true

// 7. fill() - Rellena todos los elementos del array desde el índice inicial hasta el final con un valor estático

// Su estructura para que funcione es array.fill(valor, inicio, fin);

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Usamos fill() para rellenar con el valor 9 desde el índice 3 hasta el índice 6 (sin incluir el 6)
const filledArray = arr.fill(9, 3, 6);
console.log(filledArray); // [1, 2, 3, 9, 9, 9, 7, 8]


// 8. filter() 
// Crea un nuevo array con todos los elementos que pasen la prueba implementada por la función proporcionada
const arr = [1,2,3,4,5]
const filteredArray = arr.filter(num => num > 3);
console.log(filteredArray); // [4, 5]

// 9. find() 
// Devuelve el primer elemento en el array que satisfaga la función de prueba proporcionada
const arr = [0,1,2,3,4,5]
const foundElement = arr.find(num => num > 3);
console.log(foundElement); // 4

// 10. findIndex() -
// Devuelve el índice del primer elemento en el array que satisfaga la función de prueba proporcionada
const arr = [0,1,2,3,4,5,6,7]
const foundIndex = arr.findIndex(num => num > 3);
console.log(foundIndex); // 4



// 11. findLast() 
// Devuelve el último elemento en el array que satisfaga la función de prueba proporcionada

const arr = [0,1,2,3,4,5,6,7]

const foundLastElement = arr.findLast(num => num > 3);
console.log(foundLastElement); // 7

// 12. findLastIndex() 
// Devuelve el índice del último elemento en el array que satisfaga la función de prueba proporcionada

const arr = [1,2,3,4,5,6,7]

const foundLastIndex = arr.findLastIndex(num => num > 3);
console.log(foundLastIndex); // 6


// 13. flat() 
// Crea un nuevo array con todos los elementos de sub-array concatenados hasta la profundidad especificada

const nestedArray = [1, [2, [3, [4, [5]]]], 6];

// Usamos flat() para aplanar el array hasta una profundidad de 3
const flattenedArray = nestedArray.flat(3);
console.log(flattenedArray); // [1, 2, 3, 4, [5], 6]


// 14. flatMap() 
// Primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en un nuevo array

const numbers = [1, 2, 3, 4];

// Usamos flatMap() para duplicar cada número y luego aplanar el resultado en un nuevo array
const flatMappedArray = numbers.flatMap(num => [num, num * 2]);
console.log(flatMappedArray); // logica 1, 1*2, 2, 2*2 ... [1, 2, 2, 4, 3, 6, 4, 8]




// 15. forEach() 
// Ejecuta una función proporcionada una vez para cada elemento del array

const arr = [1, 2, 3, 4];

arr.forEach(num => console.log(num));


// 16. includes() 
// Determina si un array incluye un cierto valor entre sus entradas, devolviendo true o false según corresponda


// Array original
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Usamos includes() para verificar si el array contiene 'banana'
const hasBanana = fruits.includes('banana');
console.log(hasBanana); // true

// Verificamos si el array contiene 'grape'
const hasGrape = fruits.includes('grape');
console.log(hasGrape); // false

// 17. indexOf() 
// Devuelve el primer índice en el que se puede encontrar un elemento en el array, o -1 si el elemento no se encuentra

const arr = ['apple', 'banana', 'cherry', 'date'];
 
const indexOfFive = arr.indexOf("cherry");
console.log(indexOfFive); // 2






// 18. join() 
// Une todos los elementos de un array en una cadena y la devuelve

// Array original
const fruits = ['apple', 'banana', 'cherry'];

// Usamos join() para unir todos los elementos del array en una cadena, separados por un guion
const joinedString = fruits.join('-');
console.log(joinedString); // 'apple-banana-cherry'


// 19. keys() 
// Devuelve un nuevo objeto Array Iterator que contiene las claves para cada índice en el array

// Array original
const colors = ['red', 'green', 'blue'];

// Usamos keys() para obtener un iterador de las claves (índices) del array
const keysIterator = colors.keys();
for (let key of keysIterator) {
  console.log(key);
}
// Salida:
// 0
// 1
// 2


// 20. lastIndexOf() 
// Devuelve el último índice en el que un cierto elemento puede encontrarse en el array, o -1 si el elemento no se encuentra

// Array original
const numbers = [1, 2, 3, 2, 1];

// Usamos lastIndexOf() para encontrar el último índice del valor 2
const lastIndexOfTwo = numbers.lastIndexOf(2);
console.log(lastIndexOfTwo); // 3

// 21. map() 
// Crea un nuevo array con los resultados de la llamada a una función proporcionada en cada elemento en el array que llama

// Array original
const numbers = [1, 2, 3, 4];

// Usamos map() para crear un nuevo array con cada número multiplicado por 2
const mappedArray = numbers.map(num => num * 2);
console.log(mappedArray); // [2, 4, 6, 8]

// 22. pop() 
// Elimina el último elemento de un array y lo devuelve

// Array original
const fruits = ['apple', 'banana', 'cherry'];

// Usamos pop() para eliminar el último elemento del array y devolverlo
const poppedElement = fruits.pop();
console.log(poppedElement); // 'cherry'
console.log(fruits); // ['apple', 'banana']


// 23. push() 
// Añade uno o más elementos al final de un array y devuelve la nueva longitud del array

// Array original
const fruits = ['apple', 'banana'];

// Usamos push() para añadir un nuevo elemento al final del array
fruits.push('cherry');
console.log(fruits); // ['apple', 'banana', 'cherry']


// 24. reduce()
// Aplica una función a un acumulador y a cada valor de array (de izquierda a derecha) para reducirlo a un solo valor

// Array original
const numbers = [1, 2, 3, 4];

// Usamos reduce() para sumar todos los elementos del array
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10


// 25. reduceRight() 
// Aplica una función a un acumulador y a cada valor de array (de derecha a izquierda) para reducirlo a un solo valor

// Array original
const numbers = [1, 2, 3, 4];

// Usamos reduceRight() para sumar todos los elementos del array de derecha a izquierda
const sum = numbers.reduceRight((acc, curr) => acc + curr, 0);
console.log(sum); // 10


// 26. reverse() 
// Invierte el orden de los elementos de un array en su lugar
const reversedArray = arr.reverse();

// Array original
const numbers = [1, 2, 3, 4];

// Usamos reverse() para invertir el orden de los elementos del array
const reversedArray = numbers.reverse();
console.log(reversedArray); // [4, 3, 2, 1]

// 27. shift() 
// Elimina el primer elemento de un array y lo devuelve

// Array original
const fruits = ['apple', 'banana', 'cherry'];

// Usamos shift() para eliminar el primer elemento del array y devolverlo
const shiftedElement = fruits.shift();
console.log(shiftedElement); // 'apple'
console.log(fruits); // ['banana', 'cherry']


// 28. slice() 
// Devuelve una copia superficial de una porción de un array en un nuevo array objeto seleccionado desde start hasta end (end no incluido)

// Array original
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Usamos slice() para obtener una copia superficial de una porción del array
const slicedArray = fruits.slice(1, 3);
console.log(slicedArray); // ['banana', 'cherry']

// 29. some() 
// Comprueba si al menos un elemento en el array pasa la prueba implementada por la función proporcionada

// Array original
const numbers = [1, 2, 3, 4];

// Usamos some() para comprobar si al menos un elemento en el array es mayor que 3
const someAboveThree = numbers.some(num => num > 3);
console.log(someAboveThree); // true


// 30. sort() 
// Ordena los elementos de un array en su lugar y devuelve el array

// Array original
const numbers = [4, 2, 3, 1];

// Usamos sort() para ordenar los elementos del array en su lugar
const sortedArray = numbers.sort((a, b) => a - b);
console.log(sortedArray); // [1, 2, 3, 4]


// 31. splice()
// Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

// Array original
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Usamos splice() para eliminar 2 elementos a partir del índice 1 y añadir 'kiwi' y 'mango'
const splicedArray = fruits.splice(1, 2, 'kiwi', 'mango');
console.log(splicedArray); // ['banana', 'cherry']
console.log(fruits); // ['apple', 'kiwi', 'mango', 'date']


// 32. toLocaleString() 
// Devuelve una cadena de texto representando los elementos del array

// Array original
const numbers = [1234.56, 7890.12];

// Usamos toLocaleString() para devolver una cadena de texto representando los elementos del array
console.log(numbers.toLocaleString('en-US')); // "1,234.56,7,890.12"

// 33. toString() 
// Devuelve una cadena de caracteres representando el array especificado y sus elementos

// Array original
const fruits = ['apple', 'banana', 'cherry'];

// Usamos toString() para devolver una cadena de caracteres representando el array
console.log(fruits.toString()); // "apple,banana,cherry"


// 34. unshift() 
// Añade uno o más elementos al inicio de un array y devuelve la nueva longitud del array

// Array original
const fruits = ['banana', 'cherry'];

// Usamos unshift() para añadir elementos al inicio del array
fruits.unshift('apple', 'kiwi');
console.log(fruits); // ['apple', 'kiwi', 'banana', 'cherry']


// 35. values() 
// Devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice en el array

// Array original
const fruits = ['apple', 'banana', 'cherry'];

// Usamos values() para obtener un iterador de los valores del array
const valuesIterator = fruits.values();
for (let value of valuesIterator) {
  console.log(value);
}
// Salida:
// 'apple'
// 'banana'
// 'cherry'
