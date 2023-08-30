const express = require("express");
const router1Routes = require("./src/routes/route1");
const app = express();

const port = 3000;

app.use("/", router1Routes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
