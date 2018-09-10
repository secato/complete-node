require('dotenv').config()
const yargs = require('yargs')
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs
    .options({
        address: {
            demand: true,
            alias: 'a',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv


geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage)
    } else {
        console.log(results)
        console.log('')
        const { latitude, longtitude } = results
        weather.getWeather({ latitude, longtitude }, (errorMessage, results) => {
            if (errorMessage) {
                console.log(errorMessage)
            } else {
                console.log(results)
            }
        })
    }

})



