require('dotenv').config()
const yargs = require('yargs')
const geocode = require('./geocode/geocode')

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
        const latitude = results.latitude
        const longitude = results.longtitude
        getWeather(latitude, longitude)
    }

})

function getWeather(latitude, longitude) {
    const request = require('request');
    const url = `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${latitude},${longitude}`;
    console.log('Weather URL: ', url)
    request({
        url,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            console.log(body.currently.temperature);
        }
        else {
            console.log('Unable to fetch weather.');
        }
    });
}

