const express = require("express");
const helloController = (req, res) => {
  res.send("Hello World!");
};

module.exports = helloController;
