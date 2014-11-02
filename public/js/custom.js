
(function($) {$('.header-6-sub .background').each(function() {
   $(this).parallax('50%',0.7,true);
 })
 }(jQuery));



//Smooth Scroll

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$("#newsletterform").submit(function( event ) {
 
  // Stop form from submitting normally
  event.preventDefault();
  
  // Get some values from elements on the page:
  var $form = $( this ); //the submit action belongs to the form
  var term = $form.find( "input[name='email']" ).val();
  var url = $form.attr( "action" );
 
  // Send the data using post
  var posting = $.post( url, {email: term } );
 
  // Put the results in a div
  posting.done(function( data ) {
    
    if(data.indexOf("error")>-1) {
        if(data.indexOf("format")>-1) {
            $('#errorModal .modal-title').text("\""+term+"\""+" is not a valid email. ");
            $('#errorModal .modal-footer button').text("Oops! My bad!");
        } else {
            $('#errorModal .modal-title').text("Yikes! Something went wrong. Please try again soon.");
            $('#errorModal .modal-footer button').text("Ok");
        }
        $('#errorModal').modal();

    }
    else {
          
          $('#successModal .modal-footer button').text("Ok");
          $('#successModal').modal();
    }

  });
});