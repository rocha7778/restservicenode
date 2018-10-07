let nombre = "Deadpool";
let real = "Wade Winston";

console.log(nombre + ' ' + real);
console.log(`${nombre } ${real}`);


function getNobre() {

    return `${nombre }${real}`
}

console.log(`El nombre de: ${getNobre()}`);