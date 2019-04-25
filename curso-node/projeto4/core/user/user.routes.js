const app = require('express')
const router = app.Router()

// lista todos usuarios
router.route('/users/all').get()

// lista o registro de um unico usuario por id
router.route('/users/:id').get()

// criação de usuario 
router.route('/users/create').post()

// atualização do registro do usuario por id
router.route('/users/:id').put()

// deleta o usuario do BD
router.route('/users/:id').delete()

module.exports = router