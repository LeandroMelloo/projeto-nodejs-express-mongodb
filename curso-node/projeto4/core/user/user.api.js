const userDAO = require('./user.dao')

const creatUser = async (req, res) => {
    let body = req.body
    try {
        let userCreated = await userDAO.createUserDAO(body)
        res.status(201).json(userCreated)
    } catch (error) {
        res.status(500).json(error)
    }
}

const readUser = async (req, res) => {
    let id = req.params.id
    try {
        let user = await userDAO.readUserDAO(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateUser = async (req, res) => {
    let id = req.params.id
    let body = req.body
    try {
        let updateUser = await userDAO.updateUserDAO(id, body)
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteUser = async (req, res) => {
    let id = req.params.id
    let body = req.body
    try {
        let deleteUser = await userDAO.deleteUserDAO(id)
        res.status(200).json(deleteUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

const listUser = async (req, res) => {
    try {
        let listUser = await userDAO.listUserDAO()
        res.status(200).json(listUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    creatUser,
    readUser,
    updateUser,
    deleteUser,
    listUser
}