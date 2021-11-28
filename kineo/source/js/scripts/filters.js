// not waiting for doc ready
// Remove active from 'all solutions' if others active
if ($('.filters a').hasClass('active')) {
  $('#clear-filters').addClass('inactive')
}


$(document).ready(function() {

  // remove active filter
  $('.filters a').click(function() {
    $('.filters a').removeClass('active')
    $(this).addClass('active')
  })

})
