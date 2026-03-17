const express = require("express");
const app = express();

// homepage
app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

app.get("/", (req, res) => {
  const msg = req.query.msg || "Welcome";

  res.send(`
    <h1>${msg}</h1>
    <p>Home page</p>
  `);
});
