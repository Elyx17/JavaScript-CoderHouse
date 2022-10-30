
let mensajeCosto = ""
let continuar = true

const mensajeInicial = "Ingresa el código del cóctel a consultar. \n" +
                       "a) Negroni \n" + 
                       "b) Bramble \n" +
                       "c) Espresso Martini \n" +
                       "d) Mojito \n" +
                       "e) New York Sour \n" +
                       "f) Moscow Mule"

function iniciarConsulta() {
    let seleccion = prompt(mensajeInicial).toLowerCase().trim()
    
    if (seleccion !== "a" && seleccion !== "b" && seleccion !== "c" && seleccion !== "d" && seleccion !== "e" && seleccion !== "f") {
        console.warn("Error. Por favor ingresar un dato valido.")
        return 
    }

    switch(seleccion) {
        case "a":
            mensajeCosto = "El cóctel Negroni tiene un precio de $1200"
            break
        case "b":
            mensajeCosto = "El cóctel Bramble tiene un precio de $1000"
            break
        case "c":
            mensajeCosto = "El cóctel Espresso Martini tiene un precio de $1100"
            break
        case "d":
            mensajeCosto = "El cóctel Mojito tiene un precio de $900"
            break
        case "e":
            mensajeCosto = "El cóctel New York Sour tiene un precio de $1300"
            break
        case "f":
            mensajeCosto = "El cóctel Moscow Mule tiene un precio de $1400"
            break
        default:
            console.error("Hubo un error no esperado.")
            return 
    }
    alert(mensajeCosto)
}

function consultarPrecios() {
    while(continuar) {
        iniciarConsulta()
        continuar = confirm("¿Deseas consultar por otro cóctel?")
    }
}