const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: Number,
    name: String,
    company: String,
    salary: Number,
    userName: String,
    password: String,
    email: String,
    address: String
});

module.exports = mongoose.model('User', userSchema);