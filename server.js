// Simple server to boot up the app and serve up index.html

const express = require("express");
const app = express();

// Display index.html from the root URL
app.get("/", function(req, res) {
  res.sendFile(__dirname, "index.html");
});

// Serve static files
// REF: https://expressjs.com/en/starter/static-files.html
// REF: https://expressjs.com/en/4x/api.html#express.static
app.use(express.static(__dirname));

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(
    `To-do app listening on port ${port}!  Open app in browser at localhost:${port}.`
  )
);
