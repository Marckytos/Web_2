// Carrito de compras simple con objetos literales

var productos = [
    { id: 1, nombre: "Camisa", precio: 20.00},
    { id: 2, nombre: "Pantalon", precio: 40.00 },
    { id: 3, nombre: "Zapatos", precio: 60.00},
    { id: 4, nombre: "Sombrero", precio: 15.00 }
];

var carrito = [];

// Función para mostrar carrito en consola
function mostrarEnConsola() {
    console.log("=== CARRITO ACTUAL ===");
    console.log("Productos:", carrito);
    console.log("Total productos:", carrito.length);
    console.log("Total a pagar: $" + calcularTotal());
    console.log("====================");
}

function calcularTotal() {
    var total = 0;
    for (var i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    return total;
}

// MODO USUARIO
function iniciarUsuario() {
    var opcion;
    do {
        opcion = prompt(`CARRITO DE COMPRAS - USUARIO

1. Camisa - $20.00
2. Pantalon - $40.00
3. Zapatos - $60.00
4. Sombrero - $15.00
5. Mostrar carrito
6. Eliminar producto
7. Vaciar carrito
8. Modo administrador
9. Salir`);

        switch(opcion) {
            case '1': 
                carrito.push(productos[0]);
                alert("Camisa agregada al carrito!");
                mostrarEnConsola();
                break;
            case '2': 
                carrito.push(productos[1]);
                alert("Pantalon agregado al carrito!");
                mostrarEnConsola();
                break;
            case '3': 
                carrito.push(productos[2]);
                alert("Zapatos agregados al carrito!");
                mostrarEnConsola();
                break;
            case '4': 
                carrito.push(productos[3]);
                alert("Sombrero agregado al carrito!");
                mostrarEnConsola();
                break;
            case '5': 
                mostrarCarrito();
                break;
            case '6':
                eliminarProducto();
                break;
            case '7':
                carrito = [];
                alert("Carrito vaciado");
                mostrarEnConsola();
                break;
            case '8':
                var password = prompt("Contraseña de administrador:");
                if (password === "admin") {
                    iniciarAdmin();
                    return;
                } else {
                    alert("Contraseña incorrecta");
                }
                break;
            case '9': 
                alert("Gracias por usar el carrito!");
                break;
            default: 
                alert("Opcion no valida");
        }
    } while(opcion !== '9');
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito esta vacio");
        return;
    }
    
    var mensaje = "PRODUCTOS EN EL CARRITO:\n\n";
    for (var i = 0; i < carrito.length; i++) {
        mensaje += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
    }
    mensaje += "\nTotal productos: " + carrito.length;
    mensaje += "\nTotal a pagar: $" + calcularTotal();
    
    alert(mensaje);
    mostrarEnConsola();
}

function eliminarProducto() {
    if (carrito.length === 0) {
        alert("El carrito esta vacio");
        return;
    }
    
    var mensaje = "Seleccione producto a eliminar:\n\n";
    for (var i = 0; i < carrito.length; i++) {
        mensaje += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
    }
    
    var indice = prompt(mensaje);
    indice = parseInt(indice);
    
    if (indice >= 1 && indice <= carrito.length) {
        var eliminado = carrito.splice(indice - 1, 1)[0];
        alert(eliminado.nombre + " eliminado del carrito");
        mostrarEnConsola();
    } else {
        alert("Opcion no valida");
    }
}

// MODO ADMINISTRADOR
function iniciarAdmin() {
    var opcion;
    do {
        opcion = prompt(`MODO ADMINISTRADOR

1. Ver productos
2. Agregar producto
3. Modificar producto
4. Eliminar producto
5. Ver carrito usuario
6. Vaciar carrito usuario
7. Modo usuario
8. Salir`);

        switch(opcion) {
            case '1':
                verProductos();
                break;
            case '2':
                agregarProducto();
                break;
            case '3':
                modificarProducto();
                break;
            case '4':
                eliminarProductoAdmin();
                break;
            case '5':
                mostrarCarrito();
                break;
            case '6':
                carrito = [];
                alert("Carrito del usuario vaciado");
                mostrarEnConsola();
                break;
            case '7':
                iniciarUsuario();
                return;
            case '8':
                alert("Saliendo del modo administrador");
                break;
            default:
                alert("Opcion no valida");
        }
    } while(opcion !== '8');
}

function verProductos() {
    var mensaje = "PRODUCTOS DISPONIBLES:\n\n";
    for (var i = 0; i < productos.length; i++) {
        mensaje += "ID: " + productos[i].id + " - " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    alert(mensaje);
    console.log("Productos disponibles:", productos);
}

function agregarProducto() {
    var nombre = prompt("Nombre del producto:");
    var precio = parseFloat(prompt("Precio del producto:"));
    
    if (nombre && precio > 0) {
        var nuevoId = productos.length + 1;
        var nuevoProducto = { id: nuevoId, nombre: nombre, precio: precio };
        productos.push(nuevoProducto);
        alert("Producto agregado: " + nombre);
        console.log("Producto agregado:", nuevoProducto);
    } else {
        alert("Datos no validos");
    }
}

function modificarProducto() {
    var mensaje = "Productos:\n\n";
    for (var i = 0; i < productos.length; i++) {
        mensaje += productos[i].id + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    
    var id = parseInt(prompt(mensaje + "\nIngrese ID del producto a modificar:"));
    var producto = null;
    
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            producto = productos[i];
            break;
        }
    }
    
    if (producto) {
        var nuevoNombre = prompt("Nuevo nombre (actual: " + producto.nombre + "):");
        var nuevoPrecio = parseFloat(prompt("Nuevo precio (actual: $" + producto.precio + "):"));
        
        if (nuevoNombre) {
            producto.nombre = nuevoNombre;
        }
        if (nuevoPrecio > 0) {
            producto.precio = nuevoPrecio;
        }
        
        alert("Producto modificado");
        console.log("Producto modificado:", producto);
    } else {
        alert("Producto no encontrado");
    }
}

function eliminarProductoAdmin() {
    var mensaje = "Productos:\n\n";
    for (var i = 0; i < productos.length; i++) {
        mensaje += productos[i].id + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    
    var id = parseInt(prompt(mensaje + "\nIngrese ID del producto a eliminar:"));
    
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            var eliminado = productos.splice(i, 1)[0];
            alert("Producto eliminado: " + eliminado.nombre);
            console.log("Producto eliminado:", eliminado);
            return;
        }
    }
    alert("Producto no encontrado");
}

// Iniciar sistema
console.log("Sistema de carrito cargado");
console.log("Ejecuta iniciarUsuario() para empezar");

iniciarUsuario();