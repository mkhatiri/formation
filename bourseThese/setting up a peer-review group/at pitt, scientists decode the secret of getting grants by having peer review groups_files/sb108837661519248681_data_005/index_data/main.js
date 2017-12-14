if (!Enabler.isInitialized()) {
  Enabler.addEventListener(
    studio.events.StudioEvent.INIT,
    enablerInitialized);
} else {
   enablerInitialized();
}

function enablerInitialized() {
  // Enabler initialized.
  // In App ads are rendered offscreen so animation should wait for
  // the visible event. These are simulated with delays in the local
  // environment.
  if (!Enabler.isVisible()) {
    Enabler.addEventListener(
      studio.events.StudioEvent.VISIBLE,
      adVisible);
  } else {
     adVisible();
  }
}

// Trigger animation when ready
function adVisible() {

}

// On document ready let's do some things
$(document).ready(function(){
  
  //Event Handler: Clicking anywhere on the wrapper will exit to the quiz

   $("#logospot").on("click", function(){
    Enabler.exit("Multipliers of Prosperity clicked");
  });

  $("#cta_btn").on("click", function(){
    Enabler.exit("Get Involved");
  });
   $("#hotspot").on("click", function(){
    Enabler.exit("Get Involved");
  });

  $("#metVideo").on("click", function(){
    Enabler.counter("Played Video", true);
  });


  //BUTTON HOVER STATE - Mouseover anywhere on the wrapper
  $('#hotspot').on('mouseenter', function() {
     $('#cta_btn').css('background-image', 'url(img/btn_cta_over.gif)');
  });
  $('#hotspot').on('mouseleave', function() {
     $('#cta_btn').css('background-image', 'url(img/btn_cta.gif)');
  });
  
  //BUTTON HOVER STATE - Mouseover anywhere on the wrapper
  $('#cta_btn').on('mouseenter', function() {
     $('#cta_btn').css('background-image', 'url(img/btn_cta_over.gif)');
  });
  $('#cta_btn').on('mouseleave', function() {
     $('#cta_btn').css('background-image', 'url(img/btn_cta.gif)');
  });


});



