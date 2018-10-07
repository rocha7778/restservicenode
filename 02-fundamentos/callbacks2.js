let empleados = [{
        id: 1,
        nombre: "Rocha"
    },
    {
        id: 2,
        nombre: "Gerrero"
    },
    {
        id: 3,
        nombre: "Natanael"
    }
];

let salarios = [{

        id: 1,
        salario: 1000
    },

    {

        id: 2,
        salario: 2000
    }
];


let getSalaryOfemployeById = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id == empleado.id);

    if (!salarioDB) {
        callback(`No Existe un Salario para empleado con el id ${empleado.id}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }

}





let getEmployeById = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id == id);

    if (!empleadoDB) {
        callback(`No Existe un empleado con el id ${id}`);

    } else {

        callback(null, empleadoDB);

    }
}






getEmployeById(1, (err, empleadoDB) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log(empleadoDB);
    getSalaryOfemployeById(empleadoDB, (err, salarioDB) => {

        if (err) {
            console.log(err);
            return;
        }


        console.log(salarioDB);

    });

});