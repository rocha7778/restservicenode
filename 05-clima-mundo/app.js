const lugar = require('./lugar/lugar.js')
const clima = require('./clima/clima.js')
const argv = require('yargs')
    .options({

        direccion: {
            alias: 'd',
            descripcion: 'Direccion de la ciudad para optener el clima',
            demand: true
        }
    }).argv;


let address = encodeURI(argv.direccion);

let getInfoClima = async(address) => {

    try {
        let infoPais = await lugar.getLugarLatiduLng(address);
        let temperatura = await clima.getemperaturaLatiduLng(infoPais.latitud, infoPais.longitud);
        return `La temperatura en ${infoPais.direccion} es de  ${temperatura.temp}`.green;

    } catch (e) {

        return `No se pudo determinar el clima en ${address}`.red;
    }


}


getInfoClima(address).then(respuesta => {
    console.log(respuesta);

}).catch(err => {
    console.log(err);
});