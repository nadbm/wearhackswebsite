
(function($) {$('.header-10-sub .background').each(function() {
  if(! isMobile.any())
   {
    //parallax effect!         
      $(function(){
          $.stellar({
            horizontalScrolling: false,
            verticalOffset: 40
          });
        });

   }
  else
    $(this).css('background-attachment','initial');
 })
 }(jQuery));


//slider
$(document).ready(function(){
  $('#teamslider').bxSlider();
});
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

$('#newsletterform,#newsletterform2').submit(function( event ) {
 
  // Stop form from submitting normally
  event.preventDefault();
  
  // Get some values from elements on the page:
  var $form = $( this ); //the submit action belongs to the form
  var term = $form.find( "input[name='email']" ).val();
  var baseVal = $form.find("input[name='base']").val();
  var url = $form.attr( "action" );
  // Send the data using post
  var posting = $.post( url, {email: term, base: baseVal } );
 
  // Put the results in a div
  posting.done(function( data ) {
    
    if(data.indexOf("error")>-1) {
        if(data.indexOf("format")>-1) {
            $('#errorModal .modal-title').text("\""+term+"\""+" is not a valid email. ");
            $('#errorModal .modal-footer button').text("Oops! My bad!");
            $('#errorModal').modal();
            $('#newsletterform_input').addClass("has-error");
        } else if(data.indexOf("already subscribed")>-1){
           $('#successModal .modal-title').text("You're already subscribed!");
           $('#errorModal .modal-footer button').text("Ok");
            $('#successModal').modal();
            $('#newsletterform_input').removeClass("has-error");
        }
          else {
            $('#errorModal .modal-title').text(data+"Yikes! Something went wrong. Please try again soon.");
            $('#errorModal .modal-footer button').text("Ok");
            $('#errorModal').modal();
            $('#newsletterform_input').addClass("has-error");
        }
        
    }
    else {
          $('#successModal .modal-title').html("Perfect! <br> <p>We need to confirm your e-mail address."+
              "To complete the subscription process, please click the link in the email we just sent you.</p>");
          $('#successModal .modal-footer button').text("Ok");
          $('#successModal').modal();
    }

  });
});



 $(function() {
    $('.updateme').tooltip();
});


$('.interviewmodal').on('show', function () { 
 $('div.modal-body').html('<iframe width="560" height="315" src="//www.youtube.com/embed/SbRWBkleReE" frameborder="0" '+
      'allowfullscreen></iframe>');  
});
$('.interviewmodal').on('hide', function () {
 $('div.modal-body').html('');
});