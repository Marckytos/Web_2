// Funcion declarativa

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(numAleatorio(1, 100)); 


// Funcion expresada

const numAleatorio2 = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(numAleatorio2(1, 100));


