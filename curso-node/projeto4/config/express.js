const app = require('express')()
const bodyParser = require('body-parser')

require('../config/db')

app.use('/api', require('../core/user/user.routes'))

app.use(bodyParser.json())

module.exports = app