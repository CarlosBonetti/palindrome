var form = $('#form-palindrome');
var resultTrue = $('.result .result-true');
var resultFalse = $('.result .result-false');
var word = $('.result .word');

$('#form-palindrome').on('submit', function(e) {
  e.preventDefault();
  var s = $(this).find('input').val();

  $.ajax({
    url: 'api/palindrome',
    data: { s: s },
    success: function() {
      resultTrue.show();
      resultFalse.hide();
      word.html(s);
    },
    error: function() {
      resultFalse.show();
      resultTrue.hide();
      word.html(s);
    }
  });
});
