//Juego del gato sencillo

// ==========================================
// VARIABLES GLOBALES
// ==========================================
let turnoActual = 'X';  // Empieza el jugador X
let tablero = ['', '', '', '', '', '', '', '', ''];  // Estado del tablero (9 celdas vacías)
let juegoActivo = true;  // Controla si el juego sigue activo

// ==========================================
// COMBINACIONES GANADORAS
// ==========================================
const combinacionesGanadoras = [
    [0, 1, 2],  // Fila superior
    [3, 4, 5],  // Fila media
    [6, 7, 8],  // Fila inferior
    [0, 3, 6],  // Columna izquierda
    [1, 4, 7],  // Columna media
    [2, 5, 8],  // Columna derecha
    [0, 4, 8],  // Diagonal principal
    [2, 4, 6]   // Diagonal secundaria
];

// ==========================================
// OBTENER TODAS LAS CELDAS
// ==========================================
const celdas = document.querySelectorAll('#tablero td');

// ==========================================
// MOSTRAR TURNO INICIAL
// ==========================================
alert(`¡Comienza el juego! Turno del jugador: ${turnoActual}`);

// ==========================================
// AGREGAR EVENT LISTENERS A CADA CELDA
// ==========================================
celdas.forEach((celda, index) => {
    celda.addEventListener('click', () => manejarClick(celda, index));
});

// ==========================================
// FUNCIÓN PRINCIPAL: MANEJAR CLICK EN CELDA
// ==========================================
function manejarClick(celda, index) {
    // Verificar si la celda ya está ocupada o si el juego terminó
    if (tablero[index] !== '' || !juegoActivo) {
        return;
    }

    // Colocar la marca del jugador actual
    tablero[index] = turnoActual;
    celda.textContent = turnoActual;
    celda.style.color = turnoActual === 'X' ? '#e74c3c' : '#3498db';

    // Verificar si hay un ganador
    if (verificarGanador()) {
        juegoActivo = false;
        setTimeout(() => {
            alert(`🎉 ¡Felicidades! El jugador ${turnoActual} ha ganado!`);
            resaltarGanador();
        }, 300);
        return;
    }

    // Verificar si hay empate
    if (verificarEmpate()) {
        juegoActivo = false;
        setTimeout(() => {
            alert('😐 ¡Es un empate! Nadie ganó esta vez.');
        }, 300);
        return;
    }

    // Cambiar de turno
    turnoActual = turnoActual === 'X' ? 'O' : 'X';
    
    // Anunciar el nuevo turno
    setTimeout(() => {
        alert(`Turno del jugador: ${turnoActual}`);
    }, 300);
}

// ==========================================
// FUNCIÓN: VERIFICAR SI HAY UN GANADOR
// ==========================================
function verificarGanador() {
    for (let combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion;
        
        if (tablero[a] !== '' && 
            tablero[a] === tablero[b] && 
            tablero[a] === tablero[c]) {
            return true;
        }
    }
    return false;
}

// ==========================================
// FUNCIÓN: VERIFICAR EMPATE
// ==========================================
function verificarEmpate() {
    return tablero.every(celda => celda !== '');
}

// ==========================================
// FUNCIÓN: RESALTAR COMBINACIÓN GANADORA
// ==========================================
function resaltarGanador() {
    for (let combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion;
        
        if (tablero[a] !== '' && 
            tablero[a] === tablero[b] && 
            tablero[a] === tablero[c]) {
            
            // Resaltar las celdas ganadoras
            celdas[a].style.backgroundColor = '#2ecc71';
            celdas[b].style.backgroundColor = '#2ecc71';
            celdas[c].style.backgroundColor = '#2ecc71';
            
            celdas[a].style.color = 'white';
            celdas[b].style.color = 'white';
            celdas[c].style.color = 'white';
            
            break;
        }
    }
}

// ==========================================
// FUNCIÓN OPCIONAL: REINICIAR JUEGO
// ==========================================
function reiniciarJuego() {
    tablero = ['', '', '', '', '', '', '', '', ''];
    turnoActual = 'X';
    juegoActivo = true;
    
    celdas.forEach(celda => {
        celda.textContent = '';
        celda.style.backgroundColor = '#ecf0f1';
        celda.style.color = '#2c3e50';
    });
    
    alert(`¡Nuevo juego! Turno del jugador: ${turnoActual}`);
}

// ==========================================
// AGREGAR BOTÓN DE REINICIO (OPCIONAL)
// ==========================================
// Puedes agregar esto al HTML: <button onclick="reiniciarJuego()">Reiniciar</button>