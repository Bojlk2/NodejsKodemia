const fs = require('fs')

fs.readFile('hola.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
      console.log(`Contenido del archivo: ${data}`)
})
