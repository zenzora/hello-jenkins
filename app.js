var express = require('express');
//A change 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello jenkins');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
