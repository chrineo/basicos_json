const argv = require('yargs')
    .command('crear', 'crea un elemento', {
        descripcion: { demand: true, alias: 'd', desc: 'descripcion de la tarea' }
    })
    .command('actualizar', 'actualiza un comando', {
        descripcion: { demand: true, alias: 'd' },
        completado: { demand: true, alias: 'c', default: true, desc: 'marca como completada o pendiente la tarea' }
    })
    .command('borrar', 'borra una tarea', {
        descripcion: { demand: true, alias: 'd' }
    })
    .help()
    .argv;
module.exports = { argv };