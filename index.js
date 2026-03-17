const express = require("express");
const app = express();

// homepage
app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

app.get("/", (req, res) => {
  let msg = req.query.msg || "Welcome";

  if (msg === "[html]") {
    msg = "<h1 style='color:red'>HACKED 😈</h1>";
  }

  res.send(`<div>${msg}</div>`);
});
