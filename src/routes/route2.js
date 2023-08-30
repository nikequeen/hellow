const express = require("express");
const middleware = require("../middleware/middleware");

const router2 = express.Router();
router2.use(middleware);
router2.get("/protected", middleware, (req, res) => {
  res.json({ message: "Hii world" });
});
module.exports = router2;
