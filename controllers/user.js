const userUrl = require('../models/user');

async function handleUserSignUp(req,res){
    const {name, email, password} = req.body;
    await userUrl.create({
        name : name,
        email : email,
        password : password,
    })
    return res.render('home');
}

module.exports = {
    handleUserSignUp
}