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

app.get("/bookings", function (req, res) {
  // console.log(req.body);
  res.send(jsonObj)
  // res.json(jsonObj)
})

// app.post("/bookings", function (req, res) {
//   console.log(req.body);
//   var newBooking = req.body
//   // add a unique id
//   jsonObj.length >= 1 ? newBooking.id = jsonObj[jsonObj.length - 1].id + 1  : newBooking.id = 0
//   // add new food to DB (array, really...)
//   jsonObj.push(newBooking)
//   // send a response with newly created object
//   res.json(newBooking)
// })


//LISTEN ON PORT 3000
app.listen(port, function(){
  console.log('Listening on port', port);
});





