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

// JSON OBJECT RENDERED FORM EXCEL CSV
var jsonObj = require("./convertcsv.json");


// ROUTES //

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'))
})

app.get("/landing", function (req, res) {
  res.sendFile(path.join(__dirname + '/public/views/landing.html'))
})

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + '/public/views/about.html'))
})

app.get("/bookings", function (req, res) {
  res.send(jsonObj)
  // res.json(jsonObj)
})

//LISTEN ON PORT 3000
app.listen(port, function(){
  console.log('Listening on port', port);
});





