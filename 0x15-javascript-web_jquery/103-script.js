$(document).ready(function() {
    $('#btn_translate').click(fetchTranslation);
    $('#language_code').keypress(function(event) {
      if (event.which === 13) {
        fetchTranslation();
      }
    });
  
    function fetchTranslation() {
      var languageCode = $('#language_code').val();
      var apiUrl = 'https://www.fourtonfish.com/hellosalut/hello/';
  
      $.ajax({
        url: apiUrl + languageCode,
        method: 'GET',
        success: function(response) {
          $('#hello').text(response.hello);
        },
      });
    }
  });
