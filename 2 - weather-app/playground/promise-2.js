const path = require('path')
const request = require('request')
require('dotenv').config({ path: path.resolve(process.cwd(), '2 - weather-app/.env') })

const geoCodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        const encodedAddress = encodeURIComponent(address)
        const url = `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.GEO_API_KEY}&location=${encodedAddress}`
        console.log('\nGeolocation URL: ', url)
        request({
            url,
            json: true // knows that the response is a json and convert to object to us
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve({
                    address: formattedAddress(body.results[0].locations[0]),
                    latitude: body.results[0].locations[0].latLng.lat,
                    longtitude: body.results[0].locations[0].latLng.lng
                })
            } else {
                reject('Unable to connect to MapQuest API')
            }
        })
    })
}

function formattedAddress(address) {
    return `${address.adminArea3}, ${address.adminArea5}, ${address.adminArea6}, ${address.street}`
}

geoCodeAddress('29301-800').then(
    res => {
        console.log(res)
    },
    err => {
        console.log(err)
    }
)