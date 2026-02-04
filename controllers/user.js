const userUrl = require('../models/user');
const {v4:uuidv4} = require('uuid')
const { setUser } = require ('../service/auth')
const mongoose = require('mongoose');

async function handleUserSignUp(req,res){
    const {name, email, password} = req.body;
    const newID = new mongoose.Types.ObjectId();
    await userUrl.create({
        _id : newID,
        name : name,
        email : email,
        password : password,
        createdBy : newID,
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