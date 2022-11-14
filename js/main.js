
// let mensajeCosto = ""
// let continuar = true

// const mensajeInicial = "Ingresa el código del cóctel a consultar. \n" +
//                        "a) Negroni \n" + 
//                        "b) Bramble \n" +
//                        "c) Espresso Martini \n" +
//                        "d) Mojito \n" +
//                        "e) New York Sour \n" +
//                        "f) Moscow Mule"

// function iniciarConsulta() {
//     let seleccion = prompt(mensajeInicial).toLowerCase().trim()
    
//     if (seleccion !== "a" && seleccion !== "b" && seleccion !== "c" && seleccion !== "d" && seleccion !== "e" && seleccion !== "f") {
//         console.warn("Error. Por favor ingresar un dato válido.")
//         return 
//     }

//     switch(seleccion) {
//         case "a":
//             mensajeCosto = "El cóctel Negroni tiene un precio de $1200"
//             break
//         case "b":
//             mensajeCosto = "El cóctel Bramble tiene un precio de $1000"
//             break
//         case "c":
//             mensajeCosto = "El cóctel Espresso Martini tiene un precio de $1100"
//             break
//         case "d":
//             mensajeCosto = "El cóctel Mojito tiene un precio de $900"
//             break
//         case "e":
//             mensajeCosto = "El cóctel New York Sour tiene un precio de $1300"
//             break
//         case "f":
//             mensajeCosto = "El cóctel Moscow Mule tiene un precio de $1400"
//             break
//         default:
//             console.error("Hubo un error no esperado.")
//             return 
//     }
//     alert(mensajeCosto)
// }

// function consultarPrecios() {
//     while(continuar) {
//         iniciarConsulta()
//         continuar = confirm("¿Deseas consultar por otro cóctel?")
//     }
// }

const carrito = []

const tragos = [{imagen: '🥃', codigo: 1, tipo: 'Negroni', precio: 1200},
                 {imagen: '🍺', codigo: 2, tipo: 'Bramble', precio: 1000},
                 {imagen: '☕', codigo: 3, tipo: 'Espresso Martini', precio: 1100},
                 {imagen: '🍸', codigo: 4, tipo: 'Mojito', precio: 900},
                 {imagen: '🍷', codigo: 5, tipo: 'New York Sour', precio: 1300},
                 {imagen: '🍹', codigo: 6, tipo: 'Moscow Mule', precio: 1400}]

const mensajeInicial = "Selecciona tu prenda por el código numérico:\n" +
                        "1) Negroni \n" + 
                        "2) Bramble \n" +
                        "3) Espresso Martini \n" +
                        "4) Mojito \n" +
                        "5) New York Sour \n" +
                        "6) Moscow Mule"

function buscarTrago(codigo) {
    let resultado = tragos.find(trago => trago.codigo === parseInt(codigo))
        return resultado 
}

function comprar() {
    let codigo = prompt(mensajeInicial)
        if (!parseInt(codigo)) {
            alert("⛔️ Error en el código ingresado.")
            return 
        }
        let tragoElegido = buscarTrago(codigo)
            carrito.push(tragoElegido)
        let respuesta = confirm("¿Deseas llevar otra prenda?")
        if (respuesta) {
            comprar()
        } else {
            finalizarCompra()
        }
}

function verCarrito() {
    if (carrito.length > 0) {
        console.table(carrito)
    } else {
        console.warn("El carrito está vacío!")
    }
}

function finalizarCompra() {
    if (carrito.length === 0) {
        console.warn("El carrito está vacío!")
        return 
    }
    const shopping = new Compra(carrito)
    alert(`El costo total es de $ ${shopping.obtenerSubtotal()}`)
    let respuesta = confirm("¿Deseas confirmar tu pago?")
        if (respuesta) {
            alert(shopping.confirmarCompra())
            carrito.length = 0
        }
}


/*
Instrucciones a ejecutar en la Consola JS.

    1) Ejecuta la función comprar() para iniciar la compra.
    2) Ejecuta la función verCarrito() para ver tus productos seleccionados.
    3) Ejecuta la función finalizarCompra() para comprar los productos del carrito.
*/




[
    {
    imagenes: ['images/imagen1.jpg', 'images/imagen2.jpg', 'images/imagen3.jpg'],
    codigo: 5,
    tipo: 'Camisa Office',
    precio: 4894
    }
]