jQuery(window).on('load', function(){
    jQuery("#loading").fadeOut("slow");;
});

jQuery(window).scroll(function() {    
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 80) {
        jQuery("header").addClass("sticky");
    } else {
        jQuery("header").removeClass("sticky");
    }
});
jQuery('#navbar-toggle').click(function(){
    jQuery('.navbar-toggle').toggleClass('in');
    jQuery('header').toggleClass('toggle-button');
});
$.fn.andSelf = function() {
  return this.addBack.apply(this, arguments);
}

if (jQuery(window).width() < 991) {
	jQuery('.dropbtn').click(function(e) {
		e.preventDefault();
		  
		let $this = jQuery(this);

        $this.toggleClass('active');
		  
		if ($this.next().hasClass('show')) {
		    $this.next().removeClass('show');
		    $this.next().slideUp(350);
		} else {
		     $this.parent().parent().find('li .dropdown-content').removeClass('show');
		     $this.parent().parent().find('li .dropdown-content').slideUp(350);
		     $this.next().toggleClass('show');
		     $this.next().slideToggle(350);
		}
	});
}

jQuery(document).ready(function() {
    jQuery("#solution-slider").owlCarousel({
        loop: true,
        autoplay:false,
        nav:false,
        navText : [],
        dots: true,
        margin: 30,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
          0: {
              items: 1,
              },
          600: {
              items: 2,
              },
          1000: {
              items: 3,
              }
         }
    });
});


jQuery('#language a').click(function(){
    jQuery('#language').toggleClass('active');
});

