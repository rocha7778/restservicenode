let deadpool = {

    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',

    getNomnbre: function() {

        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`



    }
};

console.log(deadpool.getNomnbre());

//let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;

let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);