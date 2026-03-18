const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let msg = req.query.msg || "Welcome";

  if (msg === "[html]") {
    msg = "<h1 style='color:red'>HACKED 😈</h1>";
  }

  res.send(`<div>${msg}</div>`);
});

// REQUIRED for Render
app.listen(process.env.PORT || 3000);
