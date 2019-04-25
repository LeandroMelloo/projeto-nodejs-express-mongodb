const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/GET', (req, res) => {
    res.send('Enviando uma requisição do tipo GET')
});

app.post('/POST', (req, res, next) => {
    let cadastro = req.body

    if(cadastro.name == 'Leandro') {
        next();
    } else {
        res.status(401).send('Você não possui permissão');
    }
    
}, function (req,res) {
    res.status(200).send('Cadastro efetuado com sucesso: '+ JSON.stringify(req.body));
});

app.listen(3000,()=> {
    console.log('Seridor rodando na porta 3000')
});

