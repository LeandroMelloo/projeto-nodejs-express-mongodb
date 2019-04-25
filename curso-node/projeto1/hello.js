const http = require('http');
const host = '127.0.0.1';
const port = '3000';
const server = http.createServer((req, res) => {

    res.end("Olá Mundo")

}).listen(port, host, () => {
    console.log('Servidor rodando em http://' + host + ':' + port);
});