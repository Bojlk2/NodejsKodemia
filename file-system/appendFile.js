const fs = require('fs')

function appendFile(error) {
    if (error) {
        console.error('No se pudo adjuntar', error)
        return
    }
    console.log('El archivo se adjunto correctamente')
}

fs.appendFile('folder/hola.txt', 'Complemento de appendFile', appendFile)