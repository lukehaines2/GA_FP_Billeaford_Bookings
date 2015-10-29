// NAMESPACING
var bigData = bigData || {};
var percentageData = percentageData || {};

$(document).ready(function(){

    $.get('http://localhost:3000/bookings')
    .success(function(response){
      bigData = response;

      percentageData = percentageChartLoop();
      percentageShow();
      percentageShow2();
    })


    var polarData = {
    labels : ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets : [
        {
            fillColor : "rgba(99,123,133,0.4)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [65,54,30,81,56,55,40]
        },
        {
            fillColor : "rgba(219,186,52,0.4)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [20,60,42,58,31,21,50]
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
              data : [13,15,16,10,11,7,22,10,12,7,6,4]
            },
            {
              label: "West Barn",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor : "#637b85",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: [17,18,12,8,19,12,17,11,15,3,9,3]
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
        console.log('this is what we want', percentageObject[prop]);
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
        console.log('this is what we want', percentageObject[prop]);
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
  function percentageShow2(){
    var context = document.getElementById('percentages2').getContext('2d');
    var percentagesChart = new Chart(context).Doughnut(percentageData);
  }





// DOC READY CLOSER
});




