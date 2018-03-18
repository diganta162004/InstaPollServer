const express = require('express');

const app = express();

app.get('/test', (req, res) => res.send('Hello World Testing NEW!'));

app.get('/check', (req, res) => res.send('Hello World Checking NEW!'));

module.exports = app;
