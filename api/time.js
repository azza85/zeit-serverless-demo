module.exports = (req, res) => {
  res.status(200).send(`<h1>Current Time is ${new Date()}</h1>`)
}
