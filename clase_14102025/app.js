let inventario = []

function mostrarMenu(){
    return parseInt(prompt(
    `Opciones :
    1. Agregar producto
    2. Mostrar productos
    3. Buscar producto por nombre
    4. Salir
    Elige una opcion:
    `
    ));
}

function agregarProducto(){
    let nombre = prompt("Ingresa el nombre del producto: ")
    let cantidad = parseInt(prompt("Ingrese la cantidad del producto"))
    let precio = parseFloat(prompt("Ingrese el precio del producto"))


if(cantidad > 0 && precio > 0 ){
    let producto = {
        nombre: nombre,
        cantidad: cantidad,
        precio: precio
    };
    inventario.push(producto);
    alert("Producto agregado")
}else{
    alert("cantidad y precio deben ser numeros positivos")
}
}

function mostrarProducto(){
    if(inventario.length === 0){
        alert("Inventario vacio")
    }else{
        let mensaje = "Productos en inventario \n:";
        for(let i = 0; i< inventario.length; i++){
            mensaje+= `Producto: ${i+1}\n`+
                        `Nombre: ${inventario[i].nombre}\n`+
                        `Precio: ${inventario[i].precio}\n`+
                        `Cantidad: ${inventario[i].cantidad}\n`+
                        "---------------------------------------";
        }
        alert(mensaje);
    }
}


function buscarPorNombre(){
    let busqueda = prompt("Ingrese el nombre del producto que desea buscar \n:")
    for(let i = 0; i < inventario.length; i++){
         if (busqueda === producto.nombre){
        alert(`Producto encontrado: ${inventario[i].nombre}`);

    }else{
        alert("Producto no encontrado")
    }
  }
}





