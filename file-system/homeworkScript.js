/**
 * Usando funciones asicronas
 * 1. Crear un archivo hola.txt
 * 2. usar la funcion appendFile para agregar una segunda linea
 * 3. despues de 5 segundos eliminar el archivo (fs.unlink)
 */

 const fs = require('fs')

 fs.writeFile('homework.txt', 'Tarea nodejs', 'utf8', (error) => {
    if (error){
        console.error('Hubo un error al crear el archivo:', error)
        return
    }
    console.log('El archivo se escribió exitosamente')
})

fs.appendFile('homework.txt', '\nSegunda linea del homework', (error) => {
    if (error) {
        console.error('No se pudo adjuntar', error)
        return
    }
    console.log('El archivo se adjunto correctamente')
})


setTimeout(deleteFile, 5000)


function deleteFile () {
    fs.unlink('homework.txt', (error) => {
            if (error) {
                console.error('Error al eliminar:', error)
            }
            console.log('El archivo se elimino correctamente')
        })
}
