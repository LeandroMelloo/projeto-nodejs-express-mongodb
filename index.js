const app = require('./config/express')

app.get('/', (req, res) => {
    res.send('Boa tarde Node JS')
})

app.listen(process.env.PORT, () => {
    console.log('Servidor rodando na porta 3000')
})