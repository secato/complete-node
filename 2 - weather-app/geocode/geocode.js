const request = require('request')

const geocodeAddress = (address, callback) => {
    const encodedAddress = encodeURIComponent(address)
    const url = `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.GEO_API_KEY}&location=${encodedAddress}`
    console.log('\nURL REQUESTED:')
    console.log(url)
    console.log('')

    request({
        url,
        json: true // knows that the response is a json and convert to object to us
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to MapQuest API')
        } else {
            callback(undefined, {
                address: formattedAddress(body.results[0].locations[0]),
                latitude: body.results[0].locations[0].latLng.lat,
                longtitude: body.results[0].locations[0].latLng.lng
            })
        }
    })
}

function formattedAddress(address) {
    return `${address.adminArea3}, ${address.adminArea5}, ${address.adminArea6}, ${address.street}`
}

// function printAddress(address) {
//     console.log('Estado:', address.adminArea3)
//     console.log('Cidade:', address.adminArea5)
//     console.log('Bairro:', address.adminArea6)
//     console.log('Rua:', address.street)
// }


module.exports = { geocodeAddress }