const http = require('http')

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' })

    let salida = {
        nombre: 'rocha',
        apellido: 'rocha'
    }
    res.write(JSON.stringify(salida))
    res.end()

}).listen(3200)

console.log('Escuchando en  puerto 3200');