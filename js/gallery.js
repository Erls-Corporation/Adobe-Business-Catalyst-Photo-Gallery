(function($){
	
	 $.ajax({
                type: "GET",
                url: "img/demo-gallery/PhotoGallery.xml", // location of your gallery's xml file
                dataType: "xml",
                success: function(xml) {


                    $(xml).find('img').each(function() {

                       var location = 'img/demo-gallery/'; // relative path to the directory that holds your images
                       var url = $(this).attr('src');
                        var alt = $(this).attr('alt');

                        $('<li></li>').html('<a href="'+location+''+url+'" class="pirobox" rel="gallery" title="'+alt+'"><img class="thumb" src="'+location+''+url+'" alt="'+alt+'" title="'+alt+'" /></a>').appendTo('#gallery-ul');

                    });     
          
          		$().piroBox_ext({
									piro_speed : 700,
									bg_alpha : 0.5,
									piro_scroll : true // pirobox always positioned at the center of the page
							});  
                }
				
            });
			
})(jQuery);
