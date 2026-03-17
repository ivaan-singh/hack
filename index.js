const express = require("express");
const app = express();

// homepage
app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

// dashboard
app.get("/dashboard", (req, res) => {
  res.send("<h1>Secret Dashboard 😈</h1>");
});

// IMPORTANT for Render
app.listen(process.env.PORT || 3000);
