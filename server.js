const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'site')));

app.get('/', (req, res) => {
    res.send(path.join(__dirname, 'site', 'index.html'));
});

app.listen(3000);