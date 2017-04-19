/* ORIGINAL SOMEWHAT WORKING 
$(document).ready(function(){ 
	$('.howdy-main .shoutout .dots').show().delay(3000).fadeOut();
	$('#shoutout > div:gt(0)').hide();


    setInterval(function() {
	    $('#shoutout > div:first')
	    .fadeOut(0)
	    .next()
	    .fadeIn(0)
	    .end()
	    .appendTo('#shoutout');
	},  9000);



    $('#shoutout-lego').hide();
    $('#shoutout-lego')
     .delay(1800)
     .queue( function(next){
		 $(this).show();
		 next();
     });
     $('.highlights1')
      .delay(1800)
      .queue( function(next){
        $(this).hide();
        next();
      });
  });

ORIGINAL SOMEWHAT WORKING */

$(document).ready(function(){ 
	$('#shoutout > div:gt(0)').hide();
	$('#dots').show(0).delay(2200).hide(0);


    setInterval(function() {
	    $('#shoutout > div:first')
	    .fadeOut(0)
	    .next()
	    .fadeIn(0)
	    .end()
	    .appendTo('#shoutout');
	},  9000);



    $('#shoutout-lego').hide();
    $('#shoutout-lego')
     .delay(2300)
     .queue( function(next){
		 $(this).show();
		 next();
     });
     $('.highlights1')
      .delay(2300)
      .queue( function(next){
        $(this).hide();
        next();
      });
  });
