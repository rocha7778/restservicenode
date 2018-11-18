const fs = require('fs')





let crearArchivo = (base) => {


    return new Promise((resolve, reject) => {

        let result = '';
        result = getTablaDeMultiplicar(base);
        fs.writeFile('tablas/message.txt', result, error => {

            if (error) {
                reject(error)
            }

            resolve('se creo la tabla exitosamente')


        })
    });






}

let getTablaDeMultiplicar = (base) => {
    let result = '';
    for (i = 1; i <= 10; i++) {
        result = result + (`${base} x ${i} = ${i*base}\n`);
    }
    return result;

}


module.exports = {

    crearArchivo

}