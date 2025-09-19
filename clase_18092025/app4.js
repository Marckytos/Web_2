// Carrito de compras actualizado con objetos literales

var productos = [
    { id: 1, nombre: "Camisa", precio: 20.00},
    { id: 2, nombre: "Pantalon", precio: 40.00 },
    { id: 3, nombre: "Zapatos", precio: 60.00},
    { id: 4, nombre: "Sombrero", precio: 15.00 }
];

var carrito = [];

function agregarAlCarrito() {
    let opcion;
    do {
        opcion = prompt(`Seleccione un producto para agregar al carrito:
        1. Camisa - $20.00
        2. Pantalon - $40.00
        3. Zapatos - $60.00
        4. Sombrero - $15.00
        5. Mostrar carrito
        6. Salir`);

        switch(opcion) {
            case '1': carrito.push(productos[0]);
            alert("Producto agregado al carrito."); break;
            case '2': carrito.push(productos[1]); 
            alert("Producto agregado al carrito."); break;
            case '3': carrito.push(productos[2]); 
            alert("Producto agregado al carrito."); break;
            case '4': carrito.push(productos[3]); 
            alert("Producto agregado al carrito."); break;
            case '5': console.log(carrito); break;
            case '6': alert("Saliendo del carrito de compras."); break;
            default: alert("Opcion no valida. Intente de nuevo.");
        }
    } while(opcion !== '6');
}
agregarAlCarrito();

function calcularTotal() {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio;
    });
    return total;
}
console.log("Total a pagar: $" + calcularTotal().toFixed(2));
