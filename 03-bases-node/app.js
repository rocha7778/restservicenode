const argv = require('./config/yargs.js').argv;
const { crearArchivo, listar } = require('./multiplicar/multiplicar.js')


let comando = argv._[0];

let baseFinal = argv.base;
let limiteTabla = argv.limite;


switch (comando) {

    case 'listar':
        console.log('Limite de tabla' + limiteTabla);
        listar(baseFinal, limiteTabla);

        break;

    case 'crear':

        crearArchivo(baseFinal).then(archivo =>
            console.log(`Archivo creado ${archivo}`)).catch(error => {

            console.log("ERROR: ",
                error);
        });

        break;
    default:
        console.log('Comando no reconocido');


}