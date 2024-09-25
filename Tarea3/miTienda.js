// Lista de productos con nombre y precio:
//En la lista de los productos de la tienda se hizo un objeto 

const productos = [
    { nombre: "Camisa", precio: 350 },
    { nombre: "Pantalón", precio: 600 },
    { nombre: "Tenis", precio: 1000 },
    { nombre: "Gorra", precio: 300 }   // de esta manera se colocó el arreglo de objetos, en el que cada objeto es un producto con  2 propiedades (nombre y precio)
];


let carrito = [];//se crea un arreglo donde guardaremos los productos seleccionados

// Se crea una función para que el usuario inicie la compra, se utiliza prompt para solicitar al usuario un producto y parseInt paraconvertir el dato en entero 

function inicioCompra() {
    let seleccion;
    do {
        seleccion = parseInt(prompt(
            "Selecciona un producto por número:\n" +
            "1. Camisa - $350\n" +
            "2. Pantalón - $600\n" +
            "3. Tenis - $1000\n" +
            "4. Gorra - $300\n" +
            "5. Ver carrito y total a pagar\n" +
            "6. Salir"
        ));

        switch(seleccion) {   //Despúes el switch son las opciones que puede ir tomando el usuario, del 1-4 productos, 5 el usuario ve todo lo que ha elegido y el 6 sale de la compra
            case 1:
            case 2:
            case 3:
            case 4:
                agregarAlCarrito(seleccion);
                break;
            case 5:
                verCarrito();
                break;
            case 6:
                salir();
                break;
            default:
                alert("Por favor, selecciona de nuevo un número del 1 al 6."); //En caso que no se haya seleccionado un número del 1 al 6 se mostrara un mensaje que lo haga de nuevo
        }
    } while (seleccion !== 6);
}

// Se crea una función para ir agregando productos al carrito, el parametro de la función es el nuumero que el usuaroi escogio

function agregarAlCarrito(seleccion) {
    const producto = productos[seleccion - 1];  //Se accede al producto dentro del arreglo productos y el -1 es porque los arreglos siempre comienzan en 0 
    
   
    carrito.push(producto);//Despues se utiliza el .push para ir agregando el producto al final del arreglo
    alert(`${producto.nombre} ha sido añadido al carrito.`);  //Cada ves que el usuario escoge el producto se manda un mensaje que se ha añadido correctamente
}

// Se crea una función para que se vea el carrito

//Al final muestra una lista con el total de productos y el total de pagar
function verCarrito() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let listaCarrito = "Productos en tu carrito:\n";
    let total = 0;    //Esta variable se usará para sumar los precios de todos los productos en el carrito.

    carrito.forEach((producto, index) => {    
        listaCarrito += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;  //Recorre todos los productos en el carrito y los añade a la lista con su nombre y precio.
        total += producto.precio;   // se  calcula el total sumando los precios de cada producto.
    });

    listaCarrito += `\nTotal a pagar: $${total}`;
    alert(listaCarrito);
}

// Se hace una fumción para salir de la compra 
function salir() {
    alert("Gracias por tu compra. ¡Hasta luego!");
  
}
