//OPERADOR DE ENCADENAMIENTO OPCIONAL

const numbers = [1, 2, 3, 4, 5];
const index = null; // o podría ser undefined

const element = numbers[index?.valueOf()];
console.log(element); // Salida: undefined (no se produce un error)