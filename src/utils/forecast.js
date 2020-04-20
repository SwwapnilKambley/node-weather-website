const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f71f6b75ac140208c8f55e2882ad931f&query=' 
    + latitude + ',' + longitude 

    request({ url, json: true}, (error,{ body}) => {
        if (error) {
            callback('Unable to conncet to Weather Service',undefined)

        } else if (body.error) {
            callback('Unable to find location. Please try again. ',undefined)
        } else {
            callback(undefined, 'Weather Description :   It is currently ' + body.current.temperature + 
            ' degress out there.  There is a ' + body.current.precip + ' % chance of rain')
        }
    }) 

}

module.exports = forecast