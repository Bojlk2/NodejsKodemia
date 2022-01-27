const http = require('http')
const server = http.createServer((request, response) => {
    // console.log('Method: ', request.method)
    // console.log('URL: ', request.url)
    // console.log('Headers: ', request.headers)

    if (request.method === 'GET' && request.url === '/hola') {
        console.log('Hola Mundo')
    } else if (request.method === 'POST' && request.url === '/hola') {
        console.log('Aqui puedes crear un recurso')
    } else if (request.method === 'DELETE' && request.url === '/hola') {
        console.log('Aqui puedes borrar un recurso')
    } else if (request.method === 'GET' && request.url === '/adios') {
        console.log('!Adios! :C')
    }
// GET /hola -> hola mundo
// POST /hola -> aqui puedes crear un recurso
// DELETe /hola -> aqui puedes borrar un recurso
// GET /adios -> adios :c

    response.write('Hola desde el servidor')
    response.end()
})

server.listen(8080, () => {
    console.log('Server listening')
})