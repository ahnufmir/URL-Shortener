const userUrl = require('../models/user');
const {v4:uuidv4} = require('uuid')
const { setUser } = require ('../service/auth')
const mongoose = require('mongoose');

async function handleUserSignUp(req,res){
    let {name, email, password, role, adminPass} = req.body;
    if(adminPass === 1234){
        role = "Admin";
    }
    else
    {
        role = "Normal";
    }
    const newID = new mongoose.Types.ObjectId();
    await userUrl.create({
        _id : newID,
        name : name,
        email : email,
        password : password,
        role : role,
        createdBy : newID,
    })
   return res.redirect('/url/login');
}

async function handleUserLogin(req,res){
    const { email, password} = req.body;
    const user = await userUrl.findOne({email, password});
    if(!user) return res.render('login');
    const token = setUser(user);
    console.log(token);
    res.cookie('token', token);
    return res.redirect('/url/');
}

module.exports = {
    handleUserSignUp,
    handleUserLogin
}