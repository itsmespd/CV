$(document).ready(function() {
  $('#frmemail').submit(function(event) {
    $.ajax({
      type: 'POST',
      url: 'sendMail.php',
      data: $('#frmemail').serialize(),
      success: function() {
        $('.success').fadeIn(1000)
      }
    })
  })
})