/**
* -Construir un muro
* -Aplanar
* -Pintar
*/

//Promesas
//new Promise((resolve, reject) => {})
//resolve -> una funcion que vamos a ejecutar cuando la promesa debe de pasar de pendiente a resuelta
//reject -> una funcion que vamos a ejecutar cuando la promesa debe de pasar de pendiente a rechazada
//
//La promesa creada (objeto) tendra dos metodos: then y catch
//El then se ejecutara cuando la promesa se resuelve
//El catch se ejecuta cuando la promesa es rechazada

// const muro = {
//     construido: false,
//     aplanado: false,
//     pintado: false
// }

// function construir (unMuro) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             unMuro.construido = true

//             if(!unMuro.construido) {
//                 reject(new Error('No se pudo construir'))
//                 return
//             } 
//             resolve(unMuro)
            
//         }, 2000);
//     })
// }

// function aplanar (unMuro) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             unMuro.aplanado = true

//             if(!unMuro.aplanado) {
//                 reject(new Error('No se pudo aplanar'))
//                 return
//             } 
//             resolve(unMuro)
//         }, 2000);
//     })
    
// }

// function pintar (unMuro) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             unMuro.pintado = true

//             if(!unMuro.pintado) {
//                 reject(new Error('No se pudo pintar'))
//                 return
//             } 
//             resolve(unMuro)
//         }, 2000);
//     })
    
// }

// construir(muro)
//     .then((muroConstruido)=> {
//         console.log('Muro Construido:', muroConstruido)
//         aplanar(muroConstruido)
//             .then((muroAplanado) => {
//                 console.log('Muro Aplanado:', muroAplanado)
//                 pintar(muroAplanado)
//                     .then((muroPintado) => {
//                         console.log('Muro Pintado:', muroPintado)
//                     })
//                     .catch((error) => {
//                         console.error('Error:', error)
//             })
//             .catch((error) => {
//                 console.error('Error:', error)
//     })
//     .catch((error) => {
//         console.error('Error:', error)
//     })
//             }
        


// async function principal () {
//     const muroConstruido = await construir(muro)
//     const muroAplanado = await aplanar(muroConstruido)
//     const muroPintado = await pintar(muroAplanado)
//     console.log('Muro Pintado:', muroPintado)
// }

// principal()
//     .then(() => {
//         console.log('Fin')
//     })
//     .catch((error) => {
//         console.log('Error:', error)
//     })

  /**
 * Usando funciones asicronas de promesas (fsPromises)
 * 1. Crear un archivo hola.txt
 * 2. usar la funcion appendFile para agregar una segunda linea
 * 3. despues de 5 segundos eliminar el archivo (fs.unlink)
 */


const fsPromises = require('fs/promises')

// const file = 'promises.txt'

// fsPromises.writeFile(file, 'Nuevo archivo de promesas', 'utf8')
//     .then(() => {
//         console.log('¡Documento creado exitosamente!')
//         fsPromises.appendFile(file, '\nSegunda linea del documento', 'utf8')
//             .then(() => {
//                 console.log('Se inserto una segunda linea')
//                 setTimeout(() => {
//                     fsPromises.unlink(file)
//                         .then(() => {
//                             console.log('¡Documento eliminado!')
//                         })
//                 }, 5000)
//             })
//     })
//     .catch(error => {
//         console.error('Error:', error)
//     })

const file1 = 'promises1.txt'
async function writeFile () {
    await fsPromises.writeFile(file1, 'Nuevo archivo de promesas', 'utf8')
    await fsPromises.appendFile(file1, '\nSegunda nueva Linea', 'utf8')
    setTimeout(() => {
        fsPromises.unlink(file1)    
    }, 5000)
}

writeFile()
    .then(() => {
        setTimeout(() => {
            console.log('Fin (Async Await)')
        }, 5000);
        
    })