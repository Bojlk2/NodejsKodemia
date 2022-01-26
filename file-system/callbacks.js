/**
* -Construir un muro
* -Aplanar
* -Pintar
*/

const muro = {
    construido: false,
    aplanado: false,
    pintado: false
}

function construir (unMuro, unaFuncion) {
    setTimeout(() => {
        unMuro.construido = true
        unaFuncion(null, unMuro)
    }, 2000)
}

function aplanar (unMuroConstruido) {
    unMuroConstruido.aplanado = true
    return unMuroConstruido
}

function pintar (unMuroAplanado) {
    unMuroAplanado.aplanado = true
    return unMuroAplanado
}

construir(muro, (error, muroConstruido) => {
    if(error){
        console.error(error)
        return
    }
    pintar(muroConstruido)
})

console.log(unMuroAplanado)
