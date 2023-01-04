let productosEnCarrito = localStorage.getItem("ProductosDelCarrito")
productosEnCarrito = JSON.parse(productosEnCarrito)

const contenedorCarritoVacio = document.querySelector("#carrito-vacio")
const contenedorCarritoProductos = document.querySelector("#carrito-productos")
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones")
const contenedorCarritoComprado = document.querySelector("#carrito-comprado")
let botonesEliminar = document.querySelectorAll(".carritoProductoEliminar")

function cargarProductosCarrito() {
    if (productosEnCarrito) {

        

        contenedorCarritoVacio.classList.add("disabled")
        contenedorCarritoProductos.classList.remove("disabled")
        contenedorCarritoAcciones.classList.remove("disabled")
        contenedorCarritoComprado.classList.add("disabled")
    
        contenedorCarritoProductos.innerHTML = ""
    
        productosEnCarrito.forEach( producto => {
    
            const div = document.createElement("div")
            div.classList.add("carritoProducto")
            div.innerHTML = `
            <img class="carritoProductoImagen" src="${producto.imagen}" alt="">
            <div class="carritoProductoTitulo">
                <small>titulo</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="productoCarritoCantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="productoCarritoPrecio">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="carritoProductoSubtotal">
                <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carritoProductoEliminar" id="${producto.id}"><i class="bi bi-x-octagon-fill"></i></button>
            `
    
            contenedorCarritoProductos.append(div)
        })
        
        
    } else {
    
        contenedorCarritoVacio.classList.remove("disabled")
        contenedorCarritoProductos.classList.add("disabled")
        contenedorCarritoAcciones.classList.add("disabled")
        contenedorCarritoComprado.classList.add("disabled")
    }

    actualizarBotonesEliminar()
}


cargarProductosCarrito()

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carritoProductoEliminar")

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)
    })
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)

    productosEnCarrito.splice(index, 1)
    cargarProductosCarrito()

    localStorage.setItem("ProductosDelCarrito", JSON.stringify(productosEnCarrito))
}