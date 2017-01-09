var express = require('express');
var path = require('path');
var uno = require('./uno');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/:id/:ms', function(req, res){
  uno.pump(req.params.id, req.params.ms);
  res.redirect('/')
});

var server = app.listen(3000, function(){
  console.log('App listening on port 3000!')
})
