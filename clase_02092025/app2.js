// function randomInt(min, max) {
//     const num = Math.floor(Math.random() * (max - min + 1)) + min;
//     return num;
// }

let minimo = parseInt(prompt("Ingrese el numero minimo: "));
let maximo = parseInt(prompt("Ingrese el numero maximo: "));

const num = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
alert(`El numero aleatorio entre ${minimo} y ${maximo} es: ${num}`);