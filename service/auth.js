const jwt = require("jsonwebtoken");
const secret = "ahnuf005"


function setUser(user){
    const payload = {
        _id : user._id,
        email : user.email
    }
    return jwt.sign(payload, secret);
}

function getUser(id){
    if(!id) return null;
    return jwt.verify(id, secret);
}

module.exports = {
    setUser, getUser
}