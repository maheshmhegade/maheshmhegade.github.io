(function($){
	$(document).ready(function(){
		$('#switch').stop().delay(800).animate({ left: ( $( '#switch' ).css('left')== '0px' ? '-' +$('#switch').outerWidth()+'px':'0px')}, 800);
        $('#switch .toggle').click(function(e){ e.preventDefault();
$( '#switch' ).stop().animate({ left: ( $( '#switch' ).css('left')== '0px' ? '-' +$('#switch').outerWidth()+'px':'0px')})
		});
    });               
})
(jQuery);	





	


