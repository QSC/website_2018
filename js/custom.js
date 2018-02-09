// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function(){ 
        $('.navbar-toggle:visible').click();
});

//Remove color flare with jQuery on small screens
if ($(window).width() <= 800){	
		// do something here
		$("#target_flare").remove();
		$("#target_flarer").remove();
		$("#target_flareg").remove();
}	

