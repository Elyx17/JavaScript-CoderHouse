const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategoria = document.querySelectorAll(".botonCategoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".productoAgregar")
const numeroCarrito = document.querySelector("#numeroCarrito")


function cargarProductos(productosElegidos) {
    
    contenedorProductos.innerHTML = ""

    productosElegidos.forEach(producto => {

        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
        <img class="productoImagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="productoDetalles">
            <h3 class="productoTitulo">${producto.titulo}</h3>
            <p class="ProductoPrecio">$${producto.precio}</p>
            <Button class="productoAgregar" id="${producto.id}">Agregar</Button>
        </div>
    `
    contenedorProductos.append(div)

    })

    actualizarBotonesAgregar()
    
}

cargarProductos(productos);

botonesCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategoria.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton)
        } else {
            tituloPrincipal.innerText = "Todo el menu"
            cargarProductos(productos)
        }
        

    })
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".productoAgregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

let productosEnCarrito 

let productosEnCarritoLS = localStorage.getItem("ProductosDelCarrito")

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS)
    actualizarNumeroCarrito()
} else {
    productosEnCarrito = []
}

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idBoton)

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++
    } else {
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado)
    }


    actualizarNumeroCarrito()

    localStorage.setItem("ProductosDelCarrito", JSON.stringify(productosEnCarrito))
}

function actualizarNumeroCarrito () {
    let nuevoNumeroCarrito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    numeroCarrito.innerText = nuevoNumeroCarrito
}
