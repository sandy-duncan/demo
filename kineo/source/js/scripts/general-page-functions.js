$(document).ready(function(){

  // HERO IMAGE IN HOME BANNER
  if ($(window).width() > 750) {
    $('.hero-bg-image').fadeIn(750)
  }

  // READ MORE ON PODCASTS TEXT
  $('.read-more-link').click(function(){
    $(this).parent().addClass('open')
    $(this).remove()
  })

  // 'YOUR SPEAKERS ARE' ACCORDION__________________________________
  $('.speakers-tab').on('click', function() {
    var target = $(this).next('.more-info')
    if ($(this).hasClass('active')) {
      $('.speakers-tab').removeClass('active');
      target.slideUp(200);
    } else {
      $('.speakers-tab').removeClass('active');
      $(this).addClass('active');
      $('.more-info').slideUp(200);
      target.slideToggle(200);
    };
  })

  // LOCATION SELECTOR__________________________________
  $('.location').on('click', function() {
    // $('.other-locations').slideToggle(200);
    $('.other-locations').toggleClass('active');
  })

  // VIDEO EMBED POPUP___________________________________________
  // this one for the two column layout
  $('.video-link').click(function() {
    $(this).next('.video-overlay').addClass('active')
    // find the iframe & data-src
    var video = $(this).next().find('iframe')
    var newSrc = video.attr('data-src')
    // replace src with data-src value
    video.attr('src', newSrc)
  })

  // this one for single, as it is wrapped in another div, parent()
  $('.video-link').click(function() {
    $(this).parent().next('.video-overlay').addClass('active')
    // find the iframe & data-src
    var video = $(this).parent().next().find('iframe')
    var newSrc = video.attr('data-src')
    // replace src with data-src value
    video.attr('src', newSrc)
  })

  $('.video-overlay').click(function() {
    // stop the video by resetting the src, forces reload = pauses
    var thisVideo = $(this).find('iframe')
    var source = thisVideo.attr('src')
    thisVideo.attr('src', source)
    // // close the overlay
    $(this).removeClass('active')
  })

  // stop clicking in the play button from closing the container
  $('.vp-holder').click(function(e){
     e.stopPropagation();
  })

  // STICKY DIV RELEASE NOTES_________________________________________
  // if sticky element exists on page and width is 750px and above
  if (document.querySelector('.sticky') && $(window).width() > 750) {

    // get properties of sticky element
    var parentWidth = $('.sticky-wrapper').width()
    var windowHeight = $(window).height()
    var padding = 96
    var stickyMaxHeight = windowHeight - padding - padding

    // set properties
    $('.sticky').css({'max-width': parentWidth,'max-height': stickyMaxHeight, 'top': padding})

    //static initial position of sticky element relative to document
    var catchPoint = $('.sticky-wrapper').offset().top;

    // scroll functions
    $(window).scroll(function() {

      var windowTop = $(window).scrollTop() + padding;
      var stopMarker = $('#stop-marker').offset().top;
      var stickyBottom = $('.sticky').offset().top + $('.sticky').outerHeight() + padding
      var stickyTopStuck = $('.sticky').offset().top

      // if you scroll past sticky element
      if (windowTop > catchPoint ) {
        if (!$('.sticky').hasClass('stuck')) {
          $('.sticky').addClass('stuck');
          // console.log("add class stuck")
        }
      } else {
        if ($('.sticky').hasClass('stuck')) {
          $('.sticky').removeClass('stuck');
          // console.log("remove class stuck")
        }
      }

      // when the sticky-bottom hits the stop-marker
      if (stickyBottom >= stopMarker) {
        if (!$('.sticky').hasClass('stuck-at-bottom')) {
          $('.sticky').addClass('stuck-at-bottom')
          // console.log("add class stuck-at-bottom")
        }
      }

      // scroll back up, window-top greater then top of sticky when it's stuck at bottom
      if (windowTop < stickyTopStuck && $('.sticky').hasClass('stuck-at-bottom')) {
        $('.sticky').removeClass('stuck-at-bottom')
        // console.log("remove class stuck-at-bottom")
      }

    })

  }
  // end sticky functions

  // smooth scroll to anchors - find the h2 with matching text to the link
  $('.sticky a').click(function(e) {
    e.preventDefault()
    var find = $(this).text()
    var offset = 96
    var match = $(".release-notes h2:contains('" + find + "')").offset().top - offset

    $('html, body').animate({
      scrollTop: (match)
    },300);
  })

  $('.anchor-pod-link').click(function(e) {
    var find = $(this).attr('data-anchor')
    var offset = 96
    var match = $("h2:contains('" + find + "')").offset().top - offset

    $('html, body').animate({
      scrollTop: (match)
    },300);
  })

  // close doc ready_____________
});
