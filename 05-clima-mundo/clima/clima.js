const axios = require('axios');
const colors = require('colors');





let getemperaturaLatiduLng = async(lat, lon) => {

    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=10&appid=bdb96cea2500cfbb9d9b163758ba32df&units=metric`);

    if (respuesta.data.cod != 200) {
        return obj = {
            status: respuesta.data.cod,
            message: respuesta.data.message
        };

    }

    return obj = {
        temp: respuesta.data.list[0].main.temp,
        status: respuesta.data.cod
    };

}


module.exports = {

    getemperaturaLatiduLng: getemperaturaLatiduLng

};