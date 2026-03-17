const express = require("express");
const app = express();

// homepage
app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

// LEVEL 3 login
app.get("/login", (req, res) => {
  const pass = req.query.password;

  if (pass == false) {
    res.send("<h1>ACCESS GRANTED 😈</h1>");
  } else {
    res.send("<h1>ACCESS DENIED ❌</h1>");
  }
});

// IMPORTANT for deployment
app.listen(process.env.PORT || 3000);
