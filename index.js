const express = require("express");
const app = express();

// homepage
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome</h1>
    <p>Try to find the secret...</p>
  `);
});

// login route
app.get("/login", (req, res) => {
  const pass = req.query.password;

  if (pass === "dragon123") {
    res.send("<h1>ACCESS GRANTED 😈</h1>");
  } else {
    res.send("<h1>ACCESS DENIED ❌</h1>");
  }
});

// hidden route (not linked anywhere)
app.get("/secret", (req, res) => {
  res.send("<p>Password is somewhere in the code...</p>");
});

app.listen(process.env.PORT || 3000);
