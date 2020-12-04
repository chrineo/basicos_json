const argv = require('./config/yargs').argv;
const colors = require('colors');


const hacer = require('./por-hacer/por-hacer');



let comando = argv._[0];

switch (comando) {
    case 'crear':

        let tarea = hacer.crear(argv.d);
        console.log(tarea);
        break;
    case 'listar':
        let lista = hacer.listar();
        for (let tarea of lista) {
            console.log('=======Por hacer========'.green);
            console.log(tarea.desc);
            console.log('Estado: ', tarea.completado);
            console.log('========================'.green);
        }

        break;
    case 'actualizar':
        if (hacer.actualizar(argv.d, argv.c)) {
            console.log(`Tarea ${ argv.d} Actualizada`);
        } else {
            console.log('No existe');
        }
        break;
    case 'borrar':
        let boorrado = hacer.borrar(argv.d);
        if (boorrado) {
            console.log(`Elemento ${argv.d} Borrado`);
        } else {
            console.log('No existe');
        }

        break;
    default:
        console.log('no reconocido');
        break;
}