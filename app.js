var express = require('express');
//A change 
var app = express();
var a = 'testaatessta'; 
app.get('/', function (req, res) {
  res.send('hello jenkins, again and again! aasada');
});
app.get('/new', function (req, res) {
  res.send('wow a new page!');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
