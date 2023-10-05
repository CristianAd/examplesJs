//OPERADOR DE ENCADENAMIENTO OPCIONAL
const person = {
    name: 'John',
    address: 5 // o podría ser undefined
};

//const city = person.address?.city;
const city = person.address?.city
console.log(city); // Salida: undefined (no se produce un error)
