const express = require("express");
const helloController = require("../controller/controller");

const router1 = express.Router();

router1.get("/", helloController);

module.exports = router1;
