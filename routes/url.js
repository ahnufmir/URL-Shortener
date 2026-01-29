const express = require("express");
const { handlerPostURL, handleGetURL } = require("../controllers/handler")

const router = express.Router();

router.post("/", handlerPostURL);

router.get("/:url", handleGetURL);

module.exports = router;