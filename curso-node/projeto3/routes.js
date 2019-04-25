const app = require('express')
const bodyParser = require('body-parser')

const router = app.Router()

router.use(bodyParser.json())

router.get('/', (req, res) => {
    res.send('Enviando uma requisição do tipo GET')
});

module.exports = router;