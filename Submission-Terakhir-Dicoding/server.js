const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

app.use('/', express.static(path.join(__dirname, '/')));

app.listen(PORT, function (err) {
  if (err) throw err;
  console.log(`Running on http://localhost:${PORT}`)
});

