alert("Bienvenido a su carrito de compras");

let productos = [];

function agregarProducto(nombre) {
    const producto = {
        nombre: nombre,
    };
    productos.push(producto);
    console.log(`Producto ${nombre} agregado al carrito.`);
}
function mostrarCarrito() {
    console.log("Productos en el carrito:");
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre}`);
    });
}

while (true) {
    const accion = prompt("Ingrese 'agregar' para agregar un producto, 'mostrar' para ver el carrito, o 'salir' para finalizar:");

    if (accion === 'agregar') { 
        const nombre = prompt("Ingrese el nombre del producto:");
        agregarProducto(nombre);
    } else if (accion === 'mostrar') {
        mostrarCarrito();
    } else if (accion === 'salir') {
        break;
    } else {
        console.log("Acción no reconocida. Intente de nuevo.");
    }
}