/**
 * Usando funciones asicronas
 * 1. Crear un archivo hola.txt
 * 2. usar la funcion appendFile para agregar una segunda linea
 * 3. despues de 5 segundos eliminar el archivo (fs.unlink)
 */

 const fs = require('fs')
 const filePath = 'homework.txt'

//Paso 1
fs.writeFile(filePath, 'Tarea nodejs', 'utf8', (error) => {
    if (error){
        console.error('Hubo un error al crear el archivo:', error)
        return
    }
    console.log('El archivo se escribió exitosamente')
//Paso 2
fs.appendFile(filePath, '\nSegunda linea del homework', (error) => {
    if (error) {
        console.error('No se pudo adjuntar', error)
        return
    }
    console.log('El archivo se adjunto correctamente')
//Paso 3
setTimeout(() => {
    fs.unlink(filePath, (error) => {
        if (error) {
            console.error('Error al eliminar:', error)
        }
        console.log('El archivo se elimino correctamente')
        })
        }, 5000);
    })
})



