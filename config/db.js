const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@clusterapi-vqrfi.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

var db = mongoose.connection

db.on('error', console.error.bind(console,'connection error:'))

db.once('open', () => {
    console.log('MongoDB está conectado')
})

module.exports = mongoose