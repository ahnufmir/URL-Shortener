const userUrl = require('../models/user');
const {v4:uuidv4} = require('uuid')
const { setUser } = require ('../service/auth')

async function handleUserSignUp(req,res){
    const {name, email, password} = req.body;
    await userUrl.create({
        name : name,
        email : email,
        password : password,
    })
   return res.redirect('/url/login');
}

async function handleUserLogin(req,res){
    const { email, password} = req.body;
    const user = await userUrl.findOne({email, password});
    if(!user) return res.render('login');
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie('token', sessionId);
    return res.redirect('/url/');
}

module.exports = {
    handleUserSignUp,
    handleUserLogin
}