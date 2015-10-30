// NAMESPACING
var bigData = bigData || {};
var percentageData = percentageData || {};
var occupancyData2 = occupancyData2 || {};

$(document).ready(function(){

    $.get('http://localhost:3000/bookings')
    .success(function(response){
      bigData = response;

      percentageData = percentageChartLoop();
      percentageShow();
      percentageData2 = OccupancyChartLoop();
      occupancyShow();
    })


    var polarData = {
    labels : ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets : [
        {
            fillColor : "rgba(99,123,133,0.4)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [65,54,30,81,56,75,40]
        },
        {
            fillColor : "rgba(219,186,52,0.4)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [20,60,42,58,51,51,70]
        },
      ]
    }
    var canvas = document.getElementById("shipments");
    var ctx = canvas.getContext("2d");
    new Chart(ctx).Line(polarData);

    var data3 = {
        labels : ["Jan","Feb","March","April","May","June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
        datasets : [
            {
              label: "East Barn",
              fillColor : "rgba(220,220,220,0.5)",
              strokeColor : "#637b85",
              pointColor : "#dbba34",
              pointStrokeColor : "#637b85",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data : [13,15,26,10,21,17,22,10,12,7,6,4]
            },
            {
              label: "West Barn",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor : "#637b85",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: [27,28,12,8,19,12,17,11,15,13,19,13]
            }
        ]
    }
    var canvas = document.getElementById("departments");
    var ctx = canvas.getContext("2d");
    new Chart(ctx).Radar(data3, {scaleShowLabels : false, pointLabelFontSize : 14});


  //PERCENTAGE CALC
  function percentageChartLoop(){
    var percentageChart = [];
    var uniquePercentages = [];
    var percentageObject = {};

    for (var i = 0; i < bigData.length; i++) {
      var percentage = (bigData[i]['%']*100);
      if(!percentageObject[percentage]) percentageObject[percentage] = 0

      if(uniquePercentages.indexOf(percentage) === -1) uniquePercentages.push(percentage)
      percentageObject[percentage] += 1
    };

    for(var prop in percentageObject) {
      if(percentageObject.hasOwnProperty(prop)) {
        var pieColorNumber = percentageObject[prop];
        if(pieColorNumber <= 10) {
          percentageChart.push({ value: pieColorNumber, label: prop + '%', color: '#7234E1' })
        } else if(pieColorNumber > 10 && pieColorNumber <= 21) {
          percentageChart.push({ value: pieColorNumber, label: prop + '%', color: '#dbba34' })
        } else if(pieColorNumber > 21 && pieColorNumber <= 32) {
          percentageChart.push({ value: pieColorNumber, label: prop + '%', color: '#c62f29' })
        } else {
          percentageChart.push({ value: pieColorNumber, label: prop + '%', color: '#2c9c69' })
        }
      }
    }

    return percentageChart;
  }

  // PERCENTAGE GRAPH
  function percentageShow(){
    var context = document.getElementById('percentages').getContext('2d');
    var percentagesChart = new Chart(context).Doughnut(percentageData);
  }


    //PERCENTAGE CALC
  function OccupancyChartLoop(){
    var occupancyChart2 = [];
    var uniqueOccupancy = [];
    var occupancyObject2 = {};

    for (var i = 0; i < bigData.length; i++) {
      var percentage2 = (bigData[i]['Cottage']);
      if(!occupancyObject2[percentage2]) occupancyObject2[percentage2] = 0

      if(uniqueOccupancy.indexOf(percentage2) === -1) uniqueOccupancy.push(percentage2)
      occupancyObject2[percentage2] += 1
    };

    for(var prop in occupancyObject2) {
      if(occupancyObject2.hasOwnProperty(prop)) {
        var pieColorNumber2 = occupancyObject2[prop];
        console.log('this is what we want', occupancyObject2[prop]);

        if(pieColorNumber2 > 23 && pieColorNumber2 <=32) {
          occupancyChart2.push({ value: pieColorNumber2, label: prop, color: '#7234E1' })
        } else if(pieColorNumber2 > 33 && pieColorNumber2 <= 41) {
          occupancyChart2.push({ value: pieColorNumber2, label: prop, color: '#c62f29' })
        } else {
          occupancyChart2.push({ value: pieColorNumber2, label: prop, color: '#dbba34' })
        }
      }
    }

    return occupancyChart2;
  }

    // PERCENTAGE GRAPH
  function occupancyShow(){
    var context = document.getElementById('occupancy').getContext('2d');
    var percentagesChart = new Chart(context).Doughnut(percentageData2);
  }

// DOC READY CLOSER
});




