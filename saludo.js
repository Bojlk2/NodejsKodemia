const params = require('yargs-parser')(process.argv.slice(2))
console.log(params)
var colors = require('colors')

const saludo = params.name

console.log(`Hola señor ${saludo}`.rainbow)