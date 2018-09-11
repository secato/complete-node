const request = require('request')

const geocodeAddress = (address, callback) => {
    const encodedAddress = encodeURIComponent(address)
    const url = `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.GEO_API_KEY}&location=${encodedAddress}`
    console.log('\nGeolocation URL: ', url)
    request({
        url,
        json: true // knows that the response is a json and convert to object to us
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                address: formattedAddress(body.results[0].locations[0]),
                latitude: body.results[0].locations[0].latLng.lat,
                longtitude: body.results[0].locations[0].latLng.lng
            })
        } else {
            callback('Unable to connect to MapQuest API')
        }
    })
}

function formattedAddress(address) {
    return `${address.adminArea3}, ${address.adminArea5}, ${address.adminArea6}, ${address.street}`
}

module.exports = { geocodeAddress }