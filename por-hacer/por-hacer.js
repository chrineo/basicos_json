const fs = require('fs');


let listado = [];

const guarda_DB = () => {
    let data = JSON.stringify(listado);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error(`error al grabar el archivo: ${err}`);
        }
    });


};

const crear = (desc) => {
    cargar();
    let hacer = {
        desc,
        completado: false

    };

    listado.push(hacer);
    guarda_DB();

    return hacer;
};

const cargar = () => {
    try {
        listado = require('../db/data.json');

    } catch (error) {

        listado = [];

    }


};

const listar = () => {

    cargar();
    return listado;
};

const actualizar = async(desc, completado = true) => {
    cargar();
    let index = listado.findIndex(tarea => tarea.desc === desc);

    if (index >= 0) {
        listado[index].completado = completado;
        guarda_DB();
        return true
    } else { return false }


}

const borrar = (desc) => {
    cargar();
    let index = listado.findIndex(tarea => tarea.desc === desc);
    if (index >= 0) {
        listado.splice(index, 1);
        guarda_DB();
        return true;
    } else {
        return false;
    }


}
module.exports = { crear, cargar, listar, actualizar, borrar };