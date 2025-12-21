const express = require("express");
const app = express();
const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("hello");
});

// create
app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "Ayaan",
    email: "ayaan2@gmail.com",
    username: "ayaan2",
  });
  res.send(createdUser);
});

// undate
app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    { username: "ayaan2" },
    { name: "Ayaan" },
    { new: true }
  );
  res.send(updatedUser);
});

// read
app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.send(users);
});

// delete
app.get("/delete", async (req, res) => {
  let deleteUser = await userModel.findOneAndDelete({ username: "amaan455" });
  res.send(deleteUser);
});

app.listen(3000);
