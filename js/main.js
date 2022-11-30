const producto = document.querySelector("div#negroni")

//Guardar y Recuperar el Carrito con LocalStorage + JSON
const carrito = []
const guardarCarrito = ()=> (carrito.length > 0) && localStorage.setItem("CarritoTragos", JSON.stringify(carrito))
const recuperarCarrito = ()=> JSON.parse(localStorage.getItem("CarritoTragos")) || []
carrito.push(...recuperarCarrito())

//Armar la tabla HTML dinámica
//{imagen: '🩱', codigo: 9, tipo: 'Malla enteriza Lafelí', precio: 3122}
const armarTablaHTML = (trago)=> {
    return `<div class="card" id="negroni" >
            <div class="card__textos">
            <h3>${trago.tipo}</h3>
            <h3>$ ${trago.precio}</h3>
            <p>
                <button id="${trago.codigo} class="button button-outline" title="Agregar al carrito">Comprar</button>
            </p>
            </div>
        </div>`
}

//Cargar los productos en la tabla HTML

const cargarProductos = (array)=> {
    let tablaHTML = ""
        if (array.length > 0) {
            array.forEach((trago) => tablaHTML += armarTablaHTML(trago))
        } else {
            tablaHTML = "<h2 class='error-prendas'>Error al cargar productos.</h2>"
        }
        tbody.innerHTML = tablaHTML
}

//Activar el evento CLICK por cada botón dinámico generado
const activarClickBotonesAdd = ()=> {
    const botonesAdd = document.querySelectorAll("button.button.button-outline")
          botonesAdd.forEach(btn => {
            btn.addEventListener("click", (e)=> {
                let resultado = buscarPrenda(e.target.id)
                    carrito.push(resultado)
                    guardarCarrito()
            })
          })
}

cargarProductos(prendas)
activarClickBotonesAdd()

const buscarPrenda = (codigo)=> prendas.find(trago => trago.codigo === parseInt(codigo))

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