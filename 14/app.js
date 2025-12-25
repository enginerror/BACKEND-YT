// const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require('bcrypt')

// app.use(cookieParser())

app.get("/", (req, res) => {
  res.cookie("name", "harsh");
  res.send("done");
});

app.get("/read", function (req, res) {
  console.log(req.cookies);
  res.send("read page");
});

app.listen(3000);
