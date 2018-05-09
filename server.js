const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('client/build'))
require('./routes/apiRoutes.js')(app)
require('./routes/htmlRoutes.js')(app)

app.listen(PORT, function () {
  console.log(`Server now listening on port ${PORT}!`)
})
