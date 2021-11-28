$(document).ready(function() {

  // Case studies carousel_______________________________________
  var $caseCarousel = $('.case-carousel')
  var $newsCarousel = $('.news-carousel')
  var $customCarousel = $('.custom-carousel')

  // default / mobile
  var $caseOptions = {
    contain: true,
    pageDots: true,
    prevNextButtons: false,
    wrapAround: true,
    selectedAttraction: 0.025,
    friction: 0.5
  }

  var $newsOptions = {
    contain: true,
    pageDots: true,
    prevNextButtons: false,
    wrapAround: true,
    selectedAttraction: 0.025,
    friction: 0.5
  }

  var $customOptions = {
    contain: true,
    pageDots: true,
    prevNextButtons: false,
    wrapAround: true,
    selectedAttraction: 0.05,
    friction: 0.5,
    cellAlign: 'left'
  }

  // tablet up
  if (matchMedia('screen and (min-width: 750px)').matches) {
    $caseOptions.cellAlign = 'center';
    $caseOptions.groupCells = 2;
  }

  // desktop up
  if (matchMedia('screen and (min-width: 1025px)').matches) {
    $caseOptions.groupCells = 4;
    $newsOptions.groupCells = 3;
  }

  // case studies controls
  $('#previous-case').on( 'click', function() {
    $caseCarousel.flickity('previous');
  });
  $('#next-case').on( 'click', function() {
    $caseCarousel.flickity('next');
  });

  // news controls
  $('#previous-news').on( 'click', function() {
    $newsCarousel.flickity('previous');
  });
  $('#next-news').on( 'click', function() {
    $newsCarousel.flickity('next');
  });

  // custom controls
  $('#previous-custom').on( 'click', function() {
    $customCarousel.flickity('previous');
  });
  $('#next-custom').on( 'click', function() {
    $customCarousel.flickity('next');
  });

  // initialise
  $caseCarousel.flickity($caseOptions);
  $newsCarousel.flickity($newsOptions);

  if (document.querySelector('.custom-carousel')) {
    var maxHeight = 0;
    $('.custom-carousel .cell .custom-inner').each(function() {
      var cellHeight = $(this).innerHeight();
      // loop through cells and find the tallest
      // if maxHeight is greater than cellHeight, set to maxHeight else to cellHeight
      maxHeight = (maxHeight > cellHeight) ? maxHeight : cellHeight
    });
    // set the height
    $('.custom-carousel, .custom-carousel .flickity-viewport').height(maxHeight + 32);
    // initialise
    $customCarousel.flickity($customOptions);
  };

  // show carousels only once dom has loaded
  $('.case-carousel, .news-carousel, .custom-carousel').addClass('visible');

});
