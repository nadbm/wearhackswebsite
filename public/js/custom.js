
(function($) {$('.header-10-sub .background').each(function() {
  if(! isMobile.any())
   $(this).parallax('60%',0.7,true);
  else
    $(this).css('background-attachment','initial');
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


//Google analytics
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

 ga('create', 'UA-56751789-1', 'auto');
 ga('send', 'pageview');