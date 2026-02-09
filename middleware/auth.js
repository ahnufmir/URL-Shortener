const { getUser } = require("../service/auth");

function checkAuthentication(req, res, next) {
  let token;
  const authorizationHeaderValue = req.headers["authorization"];
  const cookieValue = req.cookies.token;
  req.user = null;
  if (cookieValue) {
    token = cookieValue;
  } else if (authorizationHeaderValue) {
    if (authorizationHeaderValue.startsWith("Bearer")) {
      token = req.headers.authorization.split("Bearer ")[1];
    }
  } else {
    return next();
  }
  const user = getUser(token);
  //console.log(user.role);
  req.user = user;
  return next();
}

function restrictTo(roles) {
    return function(req,res,next){
        if(!req.user) return res.redirect("/url/login");
        if(!roles.includes(req.user.role)) return res.status(401).redirect("/url");
        return next();
    }
}

module.exports = { checkAuthentication, restrictTo };
