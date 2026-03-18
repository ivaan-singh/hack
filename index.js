const express = require("express");
const app = express();

// 🔥 persistent message (in memory)
let savedMessage = "<h1>Welcome</h1>";

app.get("/", (req, res) => {
  const msg = req.query.msg;

  // if someone sends a message → save it
  if (msg) {
    savedMessage = msg;
  }

  res.send(`
    <html>
      <head>
        <title>Final Boss 😈</title>
      </head>
      <body>
        ${savedMessage}
      </body>
    </html>
  `);
});

// REQUIRED for Render
app.listen(process.env.PORT || 3000, () => {
  console.log("Server running 😈");
});
