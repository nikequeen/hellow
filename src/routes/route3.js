const express = require("express");
const Greeting = require("../controller/datacontroller");

const router3 = express.Router();

router3.get("/greeting", async (req, res) => {
  try {
    const greet = await Greeting.findAll();
    res.json(greet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router3;