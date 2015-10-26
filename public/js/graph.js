
var bigData;

$(document).ready(function(){

    $.get('http://localhost:3000/test')
    .success(function(response){
      console.log('resonse from test', response);
      bigData = response;
    })

})





// var express = require('express')
// var app = express()
// var path = require('path')
// var bodyParser = require('body-parser')

// $(document).ready(function() {

  
//   // NAMESPACING
//   var jsonObj = jsonObj || {};


//   var jsonObj = require("./convertcsv.json");
//   console.log(jsonObj);

// });

// console.log('im the graph page');

// // // Get the context of the canvas element we want to select
// // var ctx = document.getElementById("myChart").getContext("2d");
// // var myNewChart = new Chart(ctx).PolarArea(data);

// // Get context with jQuery - using jQuery's .get() method.
// var ctx = $("#myChart").get(0).getContext("2d");
// // This will get the first returned node in the jQuery collection.
// var myNewChart = new Chart(ctx);

// new Chart(ctx).PolarArea(data, options);