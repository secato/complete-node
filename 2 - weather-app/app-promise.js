require('dotenv').config()
const parameters = require('./parameters')
const axios = require('axios')

const argv = parameters

const encodedAddress = encodeURIComponent(argv.address)
const geocodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.GEO_API_KEY}&location=${encodedAddress}`

axios.get(geocodeURL)
    .then(response => {
        var latitude = response.data.results[0].locations[0].latLng.lat
        var longtitude = response.data.results[0].locations[0].latLng.lng
        const weatherURL = `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${latitude},${longtitude}`

        const address = response.data.results[0].locations[0]
        console.log(`${address.adminArea3}, ${address.adminArea5}, ${address.adminArea6}, ${address.street}`)

        return axios.get(weatherURL)
    })
    .then(response => {
        var temperature = response.data.currently.temperature
        var apparentTemperature = response.data.currently.apparentTemperature
        console.log('Temperature: ', temperature)
        console.log('It feels like: ', apparentTemperature)

    })
    .catch(e => {
        if (e.code === 'ENOTFOUND')
            console.log('Unable connect to the API servers.')
        else
            console.log(e.message)
    })

