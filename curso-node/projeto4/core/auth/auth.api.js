const authDAO = require('./auth.dao')
const encrypting = require('../../util/encrypt')
const tokenGenerator = require('../../util/tokenGenerator')

const authUser = async (req, res) => {
    let user = req.body.user
    let password = req.body.password

    try {
        let userData = await authDAO.authUserDAO(user)
        let checkPass = await encrypting.decrypt(password, userData.password)

        if (checkPass) {
            let token = tokenGenerator.tokenGenerator({ id: userData.userName })
            res.status(200).json(token)

        }
    } catch (error) {
        res.status(401).send('Usuário ou senha inválido(s)!')
        console.log(error)
    }
}

const tokenChecker = async (req, res, next) => {
    let token = req.headers['x-acess-token']

    try {
        let tokenChecked = await tokenGenerator.tokenValidator(token)
        req.token = tokenChecked
        next()
    } catch (error) {
        res.status(401).json(error)
    }
}

module.exports = { 
    authUser,
    tokenChecker
}

