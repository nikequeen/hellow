const express = require("express");
const router1 = require("./src/routes/route1");
const router2 = require("./src/routes/route2");
const router3 = require("./src/routes/route3");
const app = express();

const port = 3030;
app.use("/hello", router1);
app.use("/protected", router2);
app.use("/greeting", router3);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
