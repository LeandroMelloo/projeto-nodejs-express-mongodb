const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket)=> {
    console.log('Usuário conectado');
})

app.listen(process.env.PORT,()=> {
    console.log('Server rodando na porta 3000')
})