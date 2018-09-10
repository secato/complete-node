require('dotenv').config()
const parameters = require('./parameters')
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = parameters

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) { return console.log(errorMessage) }

    console.log(results)
    console.log('')
    const { latitude, longtitude } = results

    weather.getWeather({ latitude, longtitude }, (errorMessage, results) => {
        if (errorMessage) { return console.log(errorMessage) }

        console.log(results)
    })
})