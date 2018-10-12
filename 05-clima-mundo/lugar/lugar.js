const axios = require('axios');
const colors = require('colors');





let getLugarLatiduLng = async(address) => {

    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);



    if (respuesta.data.status == 'ZERO_RESULTS') {

        return obj = {
            direccion: '',
            latitud: '',
            longitud: '',
            status: decodeURI('ZERO_RESULTS')


        };

    }

    return obj = {
        direccion: respuesta.data.results[0].formatted_address,
        latitud: respuesta.data.results[0].geometry.location.lat,
        longitud: respuesta.data.results[0].geometry.location.lng,
        status: decodeURI('OK')


    };

}




module.exports = {

    getLugarLatiduLng: getLugarLatiduLng

};