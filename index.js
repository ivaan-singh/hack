const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form method="POST" action="/login">
      <input name="username" />
      <button>Send</button>
    </form>
  `);
});

app.post("/login", (req, res) => {
  res.send("Hello " + req.body.username);
});

app.listen(3000);
