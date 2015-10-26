var express       = require('express');
var app           = express();
var mongoose      = require('mongoose');
var bodyParser    = require('body-parser');
var path          = require('path')
var morgan        = require('morgan');
var port          = process.env.PORT || 3000;



// CONFIG //

// serve js & css files into a public folder
app.use(express.static(__dirname + '/public'))

// body parser config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//LISTEN ON PORT 3000
app.listen(port, function(){
  console.log('Listening on port', port);
});