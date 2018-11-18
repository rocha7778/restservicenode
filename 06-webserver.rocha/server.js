const express = require('express')
const app = express()
const hbs = require('hbs')

app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

let port = process.argv.PORT || 3200;

hbs.registerHelper('getAnio', () => {

    return new Date().getFullYear()
})

app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'Rocha',
        annio: new Date().getFullYear()
    })
})



app.get('/about', function(req, res) {

    res.render('about', {
        nombre: 'Rocha',
        annio: new Date().getFullYear()
    })
})

app.listen(3200, () => { console.log(`Escuchando en el puerto ${port}`) })