
$(document).ready(function() {

  // horizontal tab functions____________________________
  $('.tab:first-child').addClass('active')
  $('.panel:first').addClass('active')
  $('.mobile-tab:first').addClass('active')

  $('.tab').click(function() {
    var current = $(this).attr('data-id');
    $('.panel, .tab').removeClass('active');
    $(this).addClass('active');
    $('.panel#panel' + current).addClass('active');
  })

  $('.mobile-tab').on('click', function() {
    var target = $(this).next('.panel')
    if ($(this).hasClass('active')) {
      $('.mobile-tab').removeClass('active');
      target.slideUp(300);
    } else {
      $('.mobile-tab').removeClass('active');
      $(this).addClass('active');
      $('.panel').slideUp(300);
      target.slideToggle(300);
    };
    scrollUp()
  })

  function scrollUp() {
    $('html, body').animate({
      scrollTop: $('.panels-container').offset().top - 65
    }, 500)
  }

  // vertical tab functions____________________________
  $('.v-tab-right-panel:first').addClass('active')
  $('.v-tab-label:first').addClass('active')
  $('.mobile-v-tab:first').addClass('active')

  $('.v-tab-label').on('click', function() {
    var current = $(this).attr('data-id');
    $('.v-tab-right-panel, .v-tab-label').removeClass('active');
    $(this).addClass('active');
    $('.v-tab-right-panel#v-panel' + current).addClass('active');
  })

  $('.mobile-v-tab').on('click', function() {
    var target = $(this).next('.v-tab-right-panel')
    if ($(this).hasClass('active')) {
      $('.mobile-v-tab').removeClass('active');
      target.slideUp(300);
    } else {
      $('.mobile-v-tab').removeClass('active');
      $(this).addClass('active');
      $('.v-tab-right-panel').slideUp(300);
      target.slideToggle(300);
    };
    scrollUpVerticalTabs();
  })

  function scrollUpVerticalTabs() {
    $('html, body').animate({
      scrollTop: $('.v-tab-right-col').offset().top - 65
    }, 500)
  }

  // maps vertical tab______________________________
  $('.map-panel:first-child').addClass('active')

  $('.map-select li').click(function() {
    var map = $(this).attr('data-id');

    $('.map-panel').removeClass('active');

    $('.map-panel#map' + map).addClass('active');
  })

  // close doc ready
})
