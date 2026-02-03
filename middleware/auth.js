const { getUser } = require('../service/auth')

async function restrictToLoggedinUsers(req,res,next) {
    const userCookie = req.cookies.token;
    if(!userCookie) return res.redirect('/url/login');

    const user = getUser(userCookie);
    if(!user) return res.redirect('/url/login');

    req.user = user;
    next();
}
async function checkAuth(req,res,next) {
    const userCookie = req.cookies.token;

    const user = getUser(userCookie);

    req.user = user;
    next();
}

module.exports = {restrictToLoggedinUsers, checkAuth};