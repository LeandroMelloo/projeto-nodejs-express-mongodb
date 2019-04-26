const bcrypt = require('bcrypt')
const saltRounds = 10

const encrypt = async (pass)=>{
    let hass = await bcrypt.hash(pass, saltRounds)
    return hass
}

const decrypt = async (pass, hash) => {
    let res = await bcrypt.compare(pass, hash)
    return res
}

module.exports = {
    encrypt,
    decrypt
}