const express = require('express');

const auth = require('./app/controllers/auth');

var app = express();

app.get('/', function(req, res) {
  res.send('InstaPollServer is running');
})
app.use('/auth', auth);

module.exports = app;
