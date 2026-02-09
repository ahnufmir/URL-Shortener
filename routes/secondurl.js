const express = require("express");
const { handleGetURLForSecond, handleGetAllUrls } = require("../controllers/handler");
const { restrictTo } = require("../middleware/auth");

const router = express.Router();

router.get("/", restrictTo(["Normal", "Admin"]), handleGetURLForSecond);
router.get("/admin", restrictTo(["Admin"]), handleGetAllUrls)

router.get("/signup", (req,res)=>{
    return res.render('signup');
})
router.get("/login", (req,res)=>{
    return res.render('login');
})

module.exports = router;