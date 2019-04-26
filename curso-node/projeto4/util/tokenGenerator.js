const jwt = require('jsonwebtoken')
const SECRET = 'ovodeavestruz'

const tokenGenerator = (payload) => {

    try {
        let token = jwt.sign(payload, SECRET, { expiresIn: "1h" })
        return token
    } catch (error) {
        console.log(error)
        return error
    }

}

const tokenValidator = (token) => {
    if (!token) throw new Error("token inválido")

    return jwt.verify(token, SECRET)
}

module.exports = {
    tokenGenerator,
    tokenValidator
}