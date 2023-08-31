const express = require("express");
const textcontroller = require("../controller/textcontroller");

const router3 = express.Router();
router3.get("/text", textcontroller.getOneText);

module.exports = router3;
