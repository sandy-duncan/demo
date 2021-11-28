// not waiting for doc ready
if (document.querySelector('#get-left')) {

  function getLeft() {
    var pos = $('#get-left').offset().left - 48
    $('.trick-bg').css('left', pos)
  }

  getLeft()

  $( window ).resize(function() {
    getLeft()
  });

}
