$(document).ready(function(){

var counterRun = false

//Only run if the counter component exists
if (document.querySelector('.countup')) {
  $(window).scroll(function(){
    var pageBottom = $(window).scrollTop() + $(window).height()
    var target = $('.countup').offset().top
    if (pageBottom > target && counterRun == false) {
      // when target is in view run function
      countUp()
      // set flag so it doesn't keep running
      counterRun = true
    }
  })
}

// count up function
function countUp(){

  $('.number-box span').each(function(){
    var theNumber = $(this)
    var countFrom = $(this).text()
    var countTo = $(this).attr('data-count')
    // Counter could be called anything
    $({Counter: countFrom}).animate({Counter: countTo}, {
      duration: 2000,
      easing: 'swing', //easing requires jquery ui most likely
      step: function(now){
        theNumber.text(commaSeparateNumber(Math.ceil(now)))
      }
    })
  })
}

// comma function
function commaSeparateNumber(val){
  while (/(\d+)(\d{3})/.test(val.toString())){
    val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  }
  return val;
}

// end doc ready
});
