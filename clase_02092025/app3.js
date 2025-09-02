//Juego vidas

alert("Bienvenido al juego de las vidas");
let vidas = 3;

while (vidas > 0) {
    numero = parseInt(prompt("Adivina el numero entre 1 y 10: "));
    if (numero === Math.floor(Math.random() * 10) + 1) {
        alert("Felicidades, adivinaste el numero");
        break;
    }
    vidas--;
    alert(`Te quedan ${vidas} vidas`);
    if (vidas === 0) {
        alert("Perdiste todas tus vidas, el numero era " + (Math.floor(Math.random() * 10) + 1));
    }
}


