const frutas = ['manzana'];
 frutas.push('banana'); //agrega al final
frutas.unshift('mango'); //agrega al inicio
frutas.push('pera'); //agrega al final
frutas.unshift('kiwi'); //agrega al inicio

console.log(frutas);

for (let fruta of frutas) {
    console.log(fruta);
}
console.log("------------------------------------")

frutas.pop(); //elimina el ultimo


for (let fruta of frutas) {
    console.log(fruta);
}

console.log("------------------------------------")
frutas.shift(); //elimina el primero

for (let fruta of frutas) {
    console.log(fruta);
}