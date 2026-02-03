const express = require("express");
const { handleGetURLForSecond } = require("../controllers/handler")

const router = express.Router();

router.get("/", handleGetURLForSecond);

router.get("/signup", (req,res)=>{
    return res.render('signup');
})
router.get("/login", (req,res)=>{
    return res.render('login');
})

module.exports = router;