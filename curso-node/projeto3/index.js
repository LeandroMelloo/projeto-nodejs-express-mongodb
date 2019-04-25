const rotas = require('./routes')
const app = require('express')()

app.use('/rotas', rotas)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})