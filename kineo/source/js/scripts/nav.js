// Nav javascript functions

$(document).ready(function() {

  var didScroll;
  var lastScrollTop = 0;
  var delta = 75;
  // var navbarHeight = $('header').outerHeight();
  var navbarHeight = 150

  $(window).scroll(function(event){
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight && !$('ul.nav').hasClass('active')){
      // Scroll Down
      $('header').addClass('nav-up');
    } else {
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
        $('header').removeClass('nav-up');
      }
    }

    lastScrollTop = st;
  }

  // desktop hover and sub-nav hover functions__________
  $('li.has-children').hover(
    function() {
      $(this).children('.sub-nav').addClass('open')
    }, function() {
      $(this).children('.sub-nav').removeClass('open')
    }
  );

  $('.sub-nav').hover(
    function() {
      $(this).parent('li').addClass('open')
    }, function() {
      $(this).parent('li').removeClass('open')
    }
  );

  // Mobile open nav functions_____________________
  $('#hamburger').click(function() {
    if ($(this).hasClass('active')) {

      $(this).removeClass('active');
      $('ul.nav').removeClass('active')
      setTimeout(function() {
        $('#hamburger').html('<i class="fas fa-bars" aria-hidden="true"></i>')
      }, 125)

    } else {

      $(this).addClass('active');
      $('ul.nav').addClass('active')
      setTimeout(function() {
        $('#hamburger').html('<i class="fas fa-times" aria-hidden="true"></i>')
      }, 125)

    }
  })


  // - sub-nav on mobile accordion
  if($(window).width() <= 750) {

    $('li.has-children').click(function() {
      // if you click on the open one, close it
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).children('.sub-nav').slideUp(100, 'linear')
      } else {
        // if you click on any others, close all
        $('li.has-children').removeClass('active')
        $('.sub-nav').slideUp(100, 'linear')
        // then, open the one you clicked on
        $(this).toggleClass('active')
        $(this).children('.sub-nav').slideToggle(100, 'linear')
      }
    })
  }

  // SEARCH BAR_________________________________
  // open search
  $('#search-icon, #search-icon-mobile').click(function() {
    $(this).toggleClass('active');
    $('.search-container').toggle();
    $('.search-bar input[type="text"]').focus();
  })

  // stop clicking in the search bar closing
  $('.search-bar').click(function(e){
     e.stopPropagation();
  })

  // close search
  $('.search-container').click(function() {
    $(this).hide();
    $('#search-icon').removeClass('active');
  })


// close doc ready
});
