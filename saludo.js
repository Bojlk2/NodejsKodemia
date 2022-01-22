const params = require('yargs-parser')(process.argv.slice(2))
var colors = require('colors')

const saludo = params.name

console.log(`Hola señor ${saludo}`.rainbow)