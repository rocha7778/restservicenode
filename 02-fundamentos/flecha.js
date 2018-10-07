//function sumar(a, b) {
//    return a + b;
//}



let deadpool = {

    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',

    getNomnbre: () => `${this.nombre} ${this.apellido} - poder: ${this.poder}`




};


let sumar = (a, b) => a + b;

let saludar = () => "Hola mundo";

console.log(sumar(10, 20));

console.log(saludar());
console.log(deadpool.getNomnbre());