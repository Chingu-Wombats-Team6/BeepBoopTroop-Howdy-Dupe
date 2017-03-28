$(document).ready(function(){

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



/* var shoutout;
shoutout = document.getElementById("shoutout-lego");
console.log(shoutout)
for (var i = 0; i< shoutout.length; ++i) {
	shoutout[i].classList.add('visible')
}
*/


/* var x = document.querySelectorAll("div.shoutout");

x[0].display="block";
x[1].display=block;
x[2].display=none; */

//Array.from(myNodeList).forEach(function(el) { console.log(el); 
// });

/*
$(document).ready(function(){
	$('.shoutout').show();
	setTimeout(function(){
		$('.shoutout').hide();
	},5000);
})
*/