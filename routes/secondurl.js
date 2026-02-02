const express = require("express");
const { handleGetURLForSecond } = require("../controllers/handler")

const router = express.Router();

router.get("/", handleGetURLForSecond);

module.exports = router;