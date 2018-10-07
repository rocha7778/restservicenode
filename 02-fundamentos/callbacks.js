setTimeout(function() {

    console.log("Hola Mundo");
}, 30);




setTimeout(() => {
    console.log("Hola Mundo");
}, 30);


let getUsuarioById =
    (id, callback) => {

        let usuario = {
            nombre: "Rocha",
            id: id
        }

        if (id == 10) {
            callback(`El usuario con id ${id}, no existe en bd`);
        } else {
            callback(null, usuario);


        }


    };



getUsuarioById(20, (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log("usuario de base de datos", usuario);
});