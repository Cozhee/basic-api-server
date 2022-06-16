const express = require('express')
const foodRoute = require('./routes/food')
const clothesRoute = require('./routes/clothes')
const notFoundHandler = require('./error-handlers/404')
const errorHandler = require('./error-handlers/500')

const app = express()
app.use(express.json())
app.use(foodRoute, clothesRoute)

const PORT = process.env.PORT || 3001

app.use('*', notFoundHandler)
app.use(errorHandler)

function start() {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
}

module.exports = {server: app, start}
