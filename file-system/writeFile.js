const fs = require('fs')

function writeFile(error) {
    if (error){
        console.error('Hubo un error al crear el archivo:', error)
        return
    }
    console.log('El archivo se escribió exitosamente')
}

fs.writeFile('hola.txt', 'Hola a todos desde el nuevo archivo', 'utf8', writeFile)