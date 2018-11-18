let empleados = [{
        id: 1,
        nombre: 'rocha'
    },

    {
        id: 2,
        nombre: 'carlos'
    },

    {
        id: 3,
        nombre: 'miguel'
    }
]


let salarios = [{

        id: 1,
        salario: 1000
    },

    {
        id: 2,
        salario: 1300
    }
]


let getSalario = (empleado, callback2) => {

    let salarioDB = salarios.find(salario => empleado.id == salario.id)

    if (!salarioDB) {

        callback2(`No existe el salario para el empleado ${empleado.nombre} `)

    } else {

        callback2(null, salarioDB)
    }

}

/*
getSalario({ id: 1, nombre: 'rocha' }, (err, salarioDB) => {

    if (err) {
        return console.log(err);
    }

    console.log(`el salario del empleado -  es de ${salarioDB.salario}`);

});
*/



let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id == id)
    if (!empleadoDB) {
        callback(`No existe el empleado con el id ${id}`)
    } else {
        callback(null, empleadoDB)

    }
    console.log(empleadoDB);
}

getEmpleado(3, (err, empleadoDB) => {

    if (err) {
        return console.log(err);
    }

    getSalario(empleadoDB, (err, salarioDB) => {

        if (err) {
            return console.log(err);
        }

        console.log(`el salario del empleado ${empleadoDB.nombre} -  es de ${salarioDB.salario}`);

    })
});