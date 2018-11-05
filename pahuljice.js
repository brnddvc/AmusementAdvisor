$(document).ready(function(){
  console.log("pozvao");
	$("#myNavbar").animate({'opacity':'0.9'}, 1200);
	$("#navigacija").animate({'opacity':'0.9'}, 1800);


    $(window).scroll( function(){
	    $("#pocetna").each( function(i){
	        var donjaGranica = $(this).offset().top + $(this).outerHeight();
	        var krajProzora = $(window).scrollTop() + $(window).height();
	        if(krajProzora*1.1 > donjaGranica){ 
	            $(this).animate({'opacity':'1'}, 750);       
	        } 
	    });
	    $("#o nama").each( function(i){
	        var donjaGranica = $(this).offset().top + $(this).outerHeight();
	        var krajProzora = $(window).scrollTop() + $(window).height();
	        if(krajProzora*1.1 > donjaGranica){ 
	            $(this).animate({'opacity':'1'}, 500);       
	        } 
	    });
	    $("#kontakt").each( function(i){
	        var donjaGranica = $(this).offset().top + $(this).outerHeight();
	        var krajProzora = $(window).scrollTop() + $(window).height();
	        if(krajProzora*1.2 > donjaGranica){ 
	            $(this).animate({'opacity':'1'}, 500);       
	        } 
	    });
	});
});


function otvoriModal(modalID){
	$("#"+modalID).modal();
}