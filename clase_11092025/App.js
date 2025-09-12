let nombres = [];

function agregarNombre() {
    let nombre = prompt("Ingrese un nombre: ");
    if(nombre) {
        nombres.push(nombre);
        alert("Nombre agregado: " + nombre + " con exito");
    } else {
        alert("No se ingreso ningun nombre.");
    }
}
// function mostrarNombres() {
//     if(nombres.length === 0) {
//         alert("No hay nombres en la lista.");
//     } else {
//         let mensaje = "Nombres almacenados: \n";
//         nombres.forEach((nombre, index) => {
//             mensaje += `${index + 1}. ${nombre}\n`;
//         });
//         alert(mensaje);
//     }
// }

function mostrarNombres() {
    for(let i = 0; i < nombres.length; i++) {
        mensaje += `${i + 1}. ${nombres[i]}\n`;
    }
    alert(mensaje);
}

function MostrarMenu() {
    let opcion;

    do {
        opcion = prompt(`Seleccione una opcion:
        1. Agregar nombre
        2. Mostrar nombres
        3. Salir`);
    
    switch(opcion) {
        case '1':
            agregarNombre();
            break;
        case '2':
            mostrarNombres();
            break;
        case '3':
            alert("Saliendo del programa.");
            break;
        default:
            alert("Opcion no valida. Intente de nuevo.");
    }
    }while(opcion !== '3');
}

MostrarMenu();
