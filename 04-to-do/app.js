const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];
let descripcion = argv.descripcion;
let estado = argv.completado;

console.log(argv);

switch (comando) {

    case 'crear':
        porHacer.leerBd();
        let tarea = porHacer.crear(descripcion);
        porHacer.guardarDb();
        break;

    case 'listar':
        porHacer.getListaTarea();
        break;

    case 'actualizar':
        console.log('Actualizar tarea');

        console.log('Estado que envia el usuario', estado);
        porHacer.actualizar(descripcion, estado);
        break;


    case 'borrar':
        console.log(porHacer.borrar(descripcion));
        break;

    default:
        console.log('Comando no reconocido');
        break;

}