const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

app.use('/', express.static(path.join(__dirname, '/')));

app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup");
    console.log(`Server berjalan di http://localhost:${PORT}`) 
});
