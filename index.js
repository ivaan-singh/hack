app.get("/login", (req, res) => {
  const pass = req.query.password;

  if (pass == false) {
    res.send("<h1>ACCESS GRANTED 😈</h1>");
  } else {
    res.send("<h1>ACCESS DENIED ❌</h1>");
  }
});
