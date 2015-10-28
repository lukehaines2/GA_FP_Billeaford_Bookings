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