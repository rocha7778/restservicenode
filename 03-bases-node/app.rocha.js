const multiplicar = require('./multiplicar/multiplicar.rocha')

let base = 8;

console.log(process.argv);


multiplicar.crearArchivo(base).then(result => {

    console.log('resultado de la operacion' + result);
})