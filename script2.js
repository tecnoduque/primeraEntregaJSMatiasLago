function saludo(b) {
    return b
}
let nombre = prompt("Hola! Ingrese su nombre")

const datosPersonales = saludo(nombre)

console.log("Ingresó a la página " + datosPersonales)

const productos = [
    { nombre: "bicis", precio: 400000 },
    { nombre: "cuadros", precio: 200000 },
    { nombre: "cascos", precio: 12000 },
    { nombre: "accesorios", precio: 78000 },
    { nombre: "suplementos", precio: 32000 },
    { nombre: "indumentaria", precio: 18000 },
]

let carritoDeCompras = []

let comunicacioConUsuario = []

while (comunicacioConUsuario != "si" && comunicacioConUsuario != "no") {
    comunicacioConUsuario = prompt("Hola " + datosPersonales + "! Desea comprar algún producto de la tienda? responda con si/no").toLowerCase()
}

if (comunicacioConUsuario == "si") {
    alert("productos disponibles")
    let listaDeProductos = productos.map((masProductos) => masProductos.nombre + " $ " + masProductos.precio)
    alert(listaDeProductos.join(" - "))
} else if (comunicacioConUsuario == "no") {
    alert("Gracias por visitarnos! " + nombre)
}

while (comunicacioConUsuario != "no") {
    let masProductos = prompt("Agregar productos al carrito:\nBicis\nCuadros\nCascos\nAccesorios\nSuplementos\nIndumentaria").toLowerCase()
    let precio = 0
    if (masProductos == "bicis" || masProductos == "cuadros" || masProductos == "cascos" || masProductos == "accesorios" || masProductos == "suplementos" || masProductos == "indumentaria") {
        switch (masProductos) {
            case "bicis":
                precio = 400000;
                break;
            case "cuadros":
                precio = 200000;
                break;
            case "cascos":
                precio = 12000;
                break;
            case "accesorios":
                precio = 78000;
                break;
            case "suplementos":
                precio = 32000;
                break;
            case "indumentaria":
                precio = 18000;
                break;
            default:
                break;
        }
        console.log(masProductos)
        let cantidadDeUnidades = parseInt(prompt("Cuantas unidades desea llevar?"))
        console.log(Number.isInteger(cantidadDeUnidades))
        obtenerNumeroEntero(cantidadDeUnidades)
        function obtenerNumeroEntero() {

            while (isNaN(cantidadDeUnidades) || !Number.isInteger(parseFloat(cantidadDeUnidades))) {
                cantidadDeUnidades = prompt("Ingresa un número entero:")
            }

            console.log("Número entero válido: " + cantidadDeUnidades)
            return parseInt(cantidadDeUnidades)
        }
        carritoDeCompras.push({ masProductos, cantidadDeUnidades, precio })
        console.log(carritoDeCompras)
    } else {
        alert("no tenemos en stock ese producto")
    }
    comunicacioConUsuario = prompt("desea seguir comprando? si/no").toLowerCase()
    while (comunicacioConUsuario == "no") {
        alert("gracias por su compra! " + nombre)
        carritoDeCompras.forEach((carritoDeComprasFinal) => { console.log(`Productos:${carritoDeComprasFinal.masProductos} - Unidades:${carritoDeComprasFinal.cantidadDeUnidades} - Subtotal a pagar:$ ${carritoDeComprasFinal.cantidadDeUnidades * carritoDeComprasFinal.precio}`) })
        break
    }
}
const valorTotalCompra = carritoDeCompras.reduce((acc, el) => acc + el.precio * el.cantidadDeUnidades, 0)
console.log(`Total a pagar por su compra es: $ ${valorTotalCompra}`)