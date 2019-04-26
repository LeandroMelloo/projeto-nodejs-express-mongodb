const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: { type: Number, required: true, unique: true },
    name: String,
    company: String,
    salary: Number,
    userName: { type: String, required: true, unique: true },
    password: String,
    email: String,
    address: String
});

module.exports = mongoose.model('User', userSchema);