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

function aplanar (unMuroConstruido, unaFuncion) {
    setTimeout(() => {
        unMuroConstruido.aplanado = true
        unaFuncion(null, unMuroConstruido)
    }, 2000)
    
}

function pintar (unMuroAplanado, unaFuncion) {
    setTimeout(() => {
        unMuroAplanado.pintado = true
        unaFuncion(null, unMuroAplanado)
    }, 2000)
    
}

construir({...muro}, (error, muroConstruido) => {
    aplanar(muroConstruido, (error, muroAplanado) => {
        pintar(muroAplanado, (error, unMuroPintado) => {
            console.log('Muro listo: ', unMuroPintado)
        })
    })
})