const express = require("express");
const { handleGetURLForSecond } = require("../controllers/handler")

const router = express.Router();

router.get("/", handleGetURLForSecond);

router.get("/signup", (req,res)=>{
    return res.render('signup');
})

module.exports = router;