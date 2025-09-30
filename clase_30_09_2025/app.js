//Iniciamos con un arreglo para iniciar tareas
let tareas = [];

//Funcion para mostrar el menu de opciones
function mostrarMenu(){
    return parseInt(prompt(`
        Opciones Disponibles:
        1. Agregar Tarea
        2. Ver todas las tareas
        3. Marcar como tarea completada
        4. Eliminar tarea
        5. Salir
        "Elige una opcion"`))
}

//Funcion para agregar tarea
function agregarTarea(){

    let nombre = prompt("Introduce el nombre de la tarea");
    if(nombre){
        //agregar tarea
        let tarea = {
            nombre: nombre,
            completado: false
        };
        tareas.push(tarea);
        alert("¡La tarea se garego de manera exitosa!")


    }else{
        alert("El nombre de la tarea no puede estar vacio");

    }
    }

    //Funcion para ver todas las tareas
    function verTareas(){
        if(tareas.length === 0){
            alert("No hay tareas en lista")

        }else{
            let mensaje = "Lista de tareas: \n";
            tareas.forEach((tarea,index)=>{
                mensaje+=`${index + 1}.- ${tarea.nombre} [${tarea.completado ? "Completada" :"Pendiente" }]\n`;
            });
            alert(mensaje);

        }
    }

    //Funcion para marcar tarea completada
function marcarTarea(){
    if(tareas.length === 0){
        alert("No hay tareas en la lista para marcar");
    }else{
        let mensaje = "Selecciona el número de la tarea a marcar como completada:\n\n";
        tareas.forEach((tarea, index) => {
            mensaje += `${index + 1}.- ${tarea.nombre} [${tarea.completado ? "Completada" : "Pendiente"}]\n`;
        });
        
        let seleccion = parseInt(prompt(mensaje));
        
        if(seleccion >= 1 && seleccion <= tareas.length){
            tareas[seleccion - 1].completado = true;
            alert(`¡La tarea "${tareas[seleccion - 1].nombre}" se marcó como completada!`);
        }else{
            alert("Número de tarea inválido");
        }
    }   
}

function eliminarTarea(){
    if(tareas.length === 0){
        alert("No hay tareas a eliminar");
    }else{
        let mensaje = "Selecciona la tarea que deseas eliminar: \n\n";
        tareas.forEach((tarea, index) => {
            mensaje += `${index + 1}.- ${tarea.nombre} [${tarea.completado ? "Completada" :"Pendiente" }]\n`;
        });

        let seleccion = parseInt(prompt(mensaje));

        if(seleccion >= 1 && seleccion <= tareas.length){
            let tareaEliminada = tareas[seleccion - 1].nombre;
            tareas.splice(seleccion - 1, 1);
            alert(`¡La tarea "${tareaEliminada}" se eliminó exitosamente!`);
        }else{
            alert("Numero de tarea inválido");
        }
    }
}

//Funcion para manejar el flujo de nuestro programna
function iniciarPrograma(){
    let continuar = true;

    while(continuar){
        let opcion = mostrarMenu();

        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTarea();
                break;
            case 4:
                eliminarTarea();
                break;
            case 5:
                alert("Saliendo del programa");
                continuar = false;
                break;
            default:
                alert("Opcion no valida. Intenta de nuevo");

        }
    }
    alert("Programa finalizado")
}

//Iniciar programa
iniciarPrograma();