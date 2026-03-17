app.get("/", (req, res) => {
  const msg = req.query.msg || "Welcome to the site";

  res.send(`
    <h1>${msg}</h1>
    <p>Home page</p>
  `);
});
