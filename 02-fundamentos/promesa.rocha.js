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


let getSalario = async(empleado) => {
    return salarios.find(salario => empleado.id == salario.id)
}


let getEmpleado = async(id) => {
    return empleados.find(empleado => empleado.id == id)
}



let getDataFromBd = async() => {
    let empleado = await getEmpleado(1)
    let salarioBD = await getSalario(empleado)

    return salarioBD;


}


getDataFromBd().then(resolve => {

    console.log(resolve.id + ' ' + resolve.salario);
}).catch(err => {


})