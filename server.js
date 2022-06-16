const express = require('express')
const foodRoute = require('./routes/food')
const clothesRoute = require('./routes/clothes')

const app = express()
app.use(express.json())
app.use(foodRoute, clothesRoute)

const PORT = process.env.PORT || 3001

function start() {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
}

module.exports = {server: app, start}
