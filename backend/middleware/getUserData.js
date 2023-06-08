const jwt = require("jsonwebtoken")
const secrectKey = "qwertyuioasdfgjklxcvbnmwertyuiogfghgadafadfsf"

const fetchUser = (req, res, next) => {
    const token = req.header('authToken')
    if(!token){
        res.status(401).send({error: "PLease Authenticate using valid token"})
    }
    try{

        const data = jwt.verify(token, secrectKey)
        req.user = data.user
        next()
    } catch(error){
        res.status(401).send({error: "PLease Authenticate using valid token"})
    }
}


module.exports = fetchUser