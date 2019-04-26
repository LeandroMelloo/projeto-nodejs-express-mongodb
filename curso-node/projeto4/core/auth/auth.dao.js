const User = require('../../model/user.model')

const authUserDAO = async (user) => {
    return await User.findOne({
        userName: user
    })
}

module.exports = {
    authUserDAO
}