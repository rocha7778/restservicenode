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



let getEmployeById = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id == id);
    if (!empleadoDB) {
        throw new Error(`No Existe un empleado con el id  ${id}`);
    } else {
        return empleadoDB;
    }
}


let getSalaryOfemployeById = async(empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id == empleado.id);

    if (!salarioDB) {
        throw new Error(`No Existe un Salario para empleado con el id ${empleado.id}`);
    } else {
        return ({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }







}


let getInformacion = async(id) => {
    let empleado = await getEmployeById(id);
    let salario = await getSalaryOfemployeById(empleado);
}



getInformacion(5).then(mensaje => {
    console.log(mensaje);
}).catch(err => {
    console.log(err);
})