//OPERADOR DE ENCADENAMIENTO OPCIONAL
const calculator = {
    add: (a, b) => a + b,
    subtract: null // o podría ser undefined
};

const result = calculator.subtract?.(10, 5);
console.log(result); // Salida: undefined (no se produce un error)
