const request = require('request');

const getWeather = ({ latitude, longtitude }, callback) => {
    const url = `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${latitude},${longtitude}`;
    console.log('Weather URL: ', url)
    request({
        url,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        }
        else {
            callback('Unnable to get weather from the API.')
        }
    });
}

module.exports = { getWeather }