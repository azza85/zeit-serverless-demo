const axios = require('axios')

module.exports = (req, res) => {
  const { city = 'london' } = req.query
  axios(`https://${process.env.WEATHER_API_HOST}/weather?units=metric&q=${city}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': process.env.WEATHER_API_HOST,
      'x-rapidapi-key': process.env.WEATHER_API_KEY
    }
  })
    .then(response => {
      console.log(response)
      res.status(200).send(`Temperature in ${city} is ${response.main.temp}`)
    })
    .catch(err => {
      console.log(err)
      res.status(400).send(err)
    })
}
