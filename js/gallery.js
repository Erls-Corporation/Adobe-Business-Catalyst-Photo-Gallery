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

                        $('<li></li>').html('<a href="'+location+''+url+'" rel="prettyPhoto[gallery]"><img class="thumb" src="'+location+''+url+'" alt="'+alt+'" title="'+alt+'" /></a>').appendTo('#gallery-ul');

                    });     
					$("a[rel^='prettyPhoto']").prettyPhoto();             
                }
				
            });
			
})(jQuery);