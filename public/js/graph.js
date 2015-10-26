// NAMESPACING
var bigData = bigData || {};

// GLOBAL VARIABLES
var bigData;

$(document).ready(function(){

    $.get('http://localhost:3000/test')
    .success(function(response){
      console.log('resonse from test', response);
      bigData = response;
    })


var pieData = [
   {
      value: 25,
      label: 'Java',
      color: '#811BD6'
   },
   {
      value: 10,
      label: 'Scala',
      color: '#9CBABA'
   },
   {
      value: 30,
      label: 'PHP',
      color: '#D18177'
   },
   {
      value : 75,
      label: 'HTML',
      color: '#6AE128'
   }
];

var context = document.getElementById('skills').getContext('2d');
var skillsChart = new Chart(context).Pie(pieData);


var barData = {
    labels: ['Italy', 'UK', 'USA', 'Germany', 'France', 'Japan'],
    datasets: [
        {
            label: '2010 customers #',
            fillColor: '#382765',
            data: [2500, 1902, 1041, 610, 1245, 952]
        },
        {
            label: '2014 customers #',
            fillColor: '#7BC225',
            data: [3104, 1689, 1318, 589, 1199, 1436]
        }
    ]
};

var context = document.getElementById('clients').getContext('2d');
var clientsChart = new Chart(context).Bar(barData);

});
