const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
    salary: { type: Number, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    adress: { type: String, required: true },
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);