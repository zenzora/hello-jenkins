var express = require('express');
//A change 
var app = express();
var a = 'test'; 
app.get('/', function (req, res) {
  res.send('hello jenkins, again!');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
