const User = require('../../model/user.model')

const createUserDAO = async(body)=>{
    let newUser = new User({
        name: body.name,
        company: body.company,
        salary: body.salary,
        userName: body.userName,
        password: body.password,
        email: body.email,
        address: body.address,
    })
    return await newUser.save()
}

// lista um unico usuario por ID
const readUserDAO = async (id) => {
    return await User.findOne({
        "_id": id
    })
}

// atualiza o usuario pelo ID
const updateUserDAO = async (id, body) => {
    return await User.findByIdAndUpdate(id, body)
}

// remove o usuario pelo ID
const deleteUserDAO = async (id) => {
    return await User.deleteOne({
        "_id": id
    })
}

// lista todos os usuarios
const listUserDAO = async () => {
    return await User.find()
}

module.exports = {
    createUserDAO,
    readUserDAO,
    updateUserDAO,
    deleteUserDAO,
    listUserDAO
}