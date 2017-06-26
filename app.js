var express = require('express');
//A change 
var app = express();
var a = 'ss'; 
app.get('/', function (req, res) {
  res.send('hello jenkins, again and again!');
});
app.get('/new', function (req, res) {
  res.send('wow a newest page!');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
