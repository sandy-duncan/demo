$(document).ready(function() {

  $('#au-contact-form select#country-select').change(function(){
    var selected = $(this).val()

    if ((selected == 'Australia') || (selected == 'au')) {
      $('#au-states').prop('disabled', false);
      $('.au-states').addClass('active');
      $('#nz-states').prop('disabled', true);
      $('.nz-states').removeClass('active');
    } else {
      $('#nz-states').prop('disabled', false);
      $('.nz-states').addClass('active');
      $('#au-states').prop('disabled', true);
      $('.au-states').removeClass('active');
    }
  })

});
