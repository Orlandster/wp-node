const express = require('express');
const app = express();
const wp = require('./wp');

app.get('/config', function (req, res) {
  res.send(wp);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
