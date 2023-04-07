// serve this website
const express = require('express');
const app = express();
const port = 8500;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/*', (req, res) => {
    // send other files
    res.sendFile(__dirname + req.url);
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});