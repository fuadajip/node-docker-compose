'use strict';

const express = require('express');

// Constants
const PORT = 8888;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hi, my name fuadajip');
});

app.get('/tuna', (req, res) => {
    res.send('I\'m ordering some tuna');
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);