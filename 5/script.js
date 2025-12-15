const express = require("express");
const app = express();

app.use(express.json()); // json base data ko readable karte hain
app.use(express.urlencoded({ extanded: true }));

app.get("/", function (req, res) {
  res.send("Home Page");
});

app.get("/about", function (req, res) {
  res.send("About Page");
});

app.get("/profile", function (req, res, next) {
  return next(new Error("About Page"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000);
