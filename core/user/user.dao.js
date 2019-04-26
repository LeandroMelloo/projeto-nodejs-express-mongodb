const User = require('../../model/user.model')
const encrypting = require('../../util/encrypt')

const createUserDAO = async (body) => {
    var password = await encrypting.encrypt(body.password)

    let newUser = new User({
        userId: body.userId,
        name: body.name,
        company: body.company,
        salary: body.salary,
        userName: body.userName,
        password: password,
        email: body.email,
        address: body.address,
    })
    return await newUser.save()
}


// lista um unico usuario por ID
const readUserDAO = async (id) => {
    return await User.findOne({
        "userId": id
    })
}

// atualizar o usuario pelo ID
const updateUserDAO = async (id, body) => {
    return await User.findOneAndUpdate({"userId": id }, body) 
}

// remove o usuario pelo ID
const deleteUserDAO = async (id) => {
    return await User.deleteOne({
        "userId": id
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