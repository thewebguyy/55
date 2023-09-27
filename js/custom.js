
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    
  })(window.jQuery);

  var button = document.querySelector('.btn-primary');

button.addEventListener('click', function() {
  window.location.href = 'order.html';
});
