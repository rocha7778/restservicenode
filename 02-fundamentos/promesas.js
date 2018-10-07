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



let getEmployeById = (id) => {

    let empleadoDB = empleados.find(empleado => empleado.id == id);


    return new Promise(
        (resolve, reject) => {
            if (!empleadoDB) {
                reject(`No Existe un empleado con el id ${id}`);
            } else {
                resolve(empleadoDB);
            }
        }
    );
}


let getSalaryOfemployeById = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id == empleado.id);

    return new Promise((resolve, reject) => {


        if (!salarioDB) {
            reject(`No Existe un Salario para empleado con el id ${empleado.id}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }



    });



}



getEmployeById(3).then(resolve => {
        console.log(resolve);

        getSalaryOfemployeById(resolve).then(resolve => {
            console.log(resolve);

        }, reject => {
            console.log(reject);

        });
    },
    reject => {
        console.log(reject);
    });