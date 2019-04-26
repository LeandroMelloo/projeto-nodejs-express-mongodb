const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()
require('../config/db')

app.use(cors())
app.use(bodyParser.json()) // body-parser

app.use('/api', require('../core/auth/auth.routes'))
app.use('/api', require('../core/user/user.routes'))

module.exports = app