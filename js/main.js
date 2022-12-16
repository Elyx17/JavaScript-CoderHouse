let hola = []
const tbody = document.querySelector('tbody')

const carrito = []
const guardarCarrito = ()=> (carrito.length > 0) && localStorage.setItem("carritoTragos", JSON.stringify(carrito))
const recuperarCarrito = ()=> JSON.parse(localStorage.getItem("carritoTragos")) || []
carrito.push(...recuperarCarrito())

const armarTablaHTML = (trago) => {
    return `                
    <tr>
        <td><h2>${trago.imagen}</h2></td>
        <td>${trago.name}</td>
        <td>$ ${trago.precio}</td>
        <td>
            <button id="${trago.codigo}" class="buttonTable">Comprar</button>
        </td>
    </tr>
    `
}

const cargarProductos = (array)=> {
    let tablaHTML = ""
        if (array.length > 0) {
            array.forEach((prenda) => tablaHTML += armarTablaHTML(prenda))
        } else {
            tablaHTML = "<h2 class='error-prendas'>Error al cargar productos.</h2>"
        }
        tbody.innerHTML = tablaHTML }

const activarClickBotonesAdd = ()=> {
    const botonesAdd = document.querySelectorAll("button.buttonTable")
            botonesAdd.forEach(btn => {
            btn.addEventListener("click", (e)=> {
                let resultado = buscarTrago(e.target.id)
                    carrito.push(resultado)
                    guardarCarrito()
            })
        })
}


cargarProductos(tragos)
activarClickBotonesAdd()

const buscarTrago = (codigo)=> tragos.find(trago => trago.codigo === parseInt(codigo))

function comprar() {
    let codigo = prompt(mensajeInicial)
        if (!parseInt(codigo)) {
            alert("⛔️ Error en el código ingresado.")
            return 
        }
        let prendaElegida = buscarPrenda(codigo)
            carrito.push(prendaElegida)
        let respuesta = confirm("¿Deseas llevar otra prenda?")
        if (respuesta) {
            comprar()
        } else {
            finalizarCompra()
        }
}

function verCarrito() {
    if (carrito.length > 0) {
        const shopping = new Compra(carrito)
        alert(`El costo total es de $ ${shopping.obtenerSubtotal()}`)
    } else {
        alert("El carrito está vacío!")
    }
}

const btnVerCarrito = document.querySelector("button#verCarrito")
btnVerCarrito.addEventListener("click", verCarrito)