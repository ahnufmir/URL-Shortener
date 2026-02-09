const { getUser } = require("../service/auth");

function checkLogin(req){
      if (req.cookies) {
      const userCookie = req.cookies.token;
      return userCookie;
    }
    if (req.headers.authorization) {
      const authHeader = req.headers.authorization.split("Bearer ")[1];
      return authHeader;
    }
}

async function restrictToLoggedinUsers(req, res, next) {
  const token = checkLogin(req);
  if (!token) return res.json({ msg: "No token" });

  const user = getUser(token);
  if (!user) return res.redirect("/url/login");

  req.user = user;
  next();
}
async function checkAuth(req, res, next) {
  const userCookie = checkLogin(req);
  const user = getUser(userCookie);
  //if(!user) return null;
  req.user = user;
  next();
}

module.exports = { restrictToLoggedinUsers, checkAuth };
