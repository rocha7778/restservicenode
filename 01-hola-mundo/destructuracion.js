let { nombre: primerNombre, apellido } = {
    nombre: 'hola',
    apellido: 'Rocha',
    getNombre: function() {
        return `nombre ${nombre}`
    }
}

console.log(primerNombre + '-' + apellido);