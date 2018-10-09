const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];



let leerBd = () => {
    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }

    return listadoPorHacer;
}

let getListaTarea = () => {

    listadoPorHacer = require('../db/data.json');

    console.log("=========Listado por hacer=======".green);
    for (tarea of listadoPorHacer) {

        console.log("Tarea:->", tarea.descripcion);
        console.log("Estado:->", tarea.completado);
    }

    console.log("===============================".green);


}


let crear = (descripcion) => {

    let porhacer = {
        descripcion: descripcion,
        completado: false
    }

    listadoPorHacer.push(porhacer);

    return listadoPorHacer;
}



let guardarDb = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {

        if (err)
            console.log("Error ->" + err);
        else
            console.log("Data guardada");

    });


}

let actualizar = (descripcion, estado) => {

    leerBd();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion == descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = estado;

    }

    console.log("INDEX ENCONTRADO", index);

    guardarDb();


}



let borrar = (descripcion) => {

    leerBd();
    let resultado = '';


    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion == descripcion;
    });

    if (index >= 0) {
        listadoPorHacer.splice(index);
        guardarDb();
        resultado = (`la tarea ${descripcion} se borro exitosamente`);
    } else {
        resultado = (`la tarea ${descripcion} no se pudo borro`);
    }


    return resultado;


}

module.exports = {

    crear: crear,
    guardarDb: guardarDb,
    leerBd: leerBd,
    getListaTarea: getListaTarea,
    actualizar: actualizar,
    borrar: borrar
}