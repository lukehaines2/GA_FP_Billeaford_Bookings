{
      animation:true,
      responsive: true,
      showTooltips: false,
      percentageInnerCutout : 70,
      segmentShowStroke : false,
      onAnimationComplete: function() {
      
        var canvasWidthvar = $('#percentages').width();
        var canvasHeight = $('#percentages').height();
        var constant = 114;
        var fontsize = (canvasHeight/constant).toFixed(2);
        //ctx.font="2.8em Verdana";
        context.font=fontsize +"em Verdana";
        context.textBaseline="middle"; 
        var total = 0;
        $.each(percentageData,function() {
            total += parseInt(this.value,10);
        });
        var tpercentage = ((percentageData[0].value/total)*100).toFixed(2)+"%";
        var textWidth = context.measureText(tpercentage).width;
        
        var txtPosx = Math.round((canvasWidthvar - textWidth)/2);
        context.fillText(tpercentage, txtPosx, canvasHeight/2);
      }
  });






/*#donut-container {
  max-width: 400px;
}*/
/*


.donut-inner
{
margin-top: -200px;
margin-bottom: 100px;
}
.donut-inner h5
{
margin-bottom: 5px;
margin-top: 0;
}
.donut-inner span {font-size: 18px;}*/







    <!-- <div id="donut-container"> -->
<!-- </div> -->
    <!-- <div class="donut-inner">
      <h5>47 / 60 st</h5>
      <span>(30 / 25 st)</span>
  </div> -->
