$(document).ready(function() {

  var gdprConsent = Cookies.get('gdpr_consent')
  // check for cookie
  if (gdprConsent !== 'true') {
    setTimeout(function() {
      $('.cookie-notice').addClass('active')
    }, 200)
  }

  var ieBrowser = Cookies.get('ie')
  // check for cookie
  if (ieBrowser !== 'true') {
    $('.ie-warning').addClass('active')
  }

  // click accept - accepts cookie and removes banner
  $('#accept-gdpr').on('click', function() {
    Cookies.set('gdpr_consent', 'true', { expires: 365, sameSite: 'strict' })
    $('.cookie-notice').removeClass('active')
  })

  // for ie click accept - you acknowledge your browser is outdated
  $('#close-ie-warning').on('click', function() {
    Cookies.set('ie', 'true', { expires: 1, sameSite: 'strict' })
    $('.ie-warning').removeClass('active')
  })

})
