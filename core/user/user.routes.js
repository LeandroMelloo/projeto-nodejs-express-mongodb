const app = require('express')
const router = app.Router()
const userAPI = require('./user.api')

// lista todos usuarios
router.route('/users/all').get(userAPI.listUser)

// lista o registro de um unico usuario por id
router.route('/users/:id').get(userAPI.readUser)

// criação de usuario 
router.route('/users/create').post(userAPI.creatUser)

// atualização do registro do usuario por id
router.route('/users/:id').put(userAPI.updateUser)

// deleta o usuario do BD
router.route('/users/:id').delete(userAPI.deleteUser)

module.exports = router