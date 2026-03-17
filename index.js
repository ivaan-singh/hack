const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// fake user
const realUser = {
  username: "admin",
  password: "1234"
};

// homepage (login)
app.get("/", (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form method="POST" action="/login">
      <input name="username" placeholder="username"/><br/>
      <input name="password" type="password" placeholder="password"/><br/>
      <button>Login</button>
    </form>
  `);
});

// login logic (INTENTIONALLY WEAK)
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username == realUser.username && password == realUser.password) {
    res.redirect("/dashboard");
  } else {
    res.send("Login failed");
  }
});

// dashboard (no protection 👀)
app.get("/dashboard", (req, res) => {
  res.send(`
    <h1>Welcome Admin</h1>
    <p>Secret: The password is 1234</p>
  `);
});

app.listen(3000);
