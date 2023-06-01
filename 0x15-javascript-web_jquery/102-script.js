$(document).ready(function () {
    $('#btn_translate').click(function () {
        var languageCode = $('#language_code').val();
        var apiUrl = 'https://www.fourtonfish.com/hellosalut/hello/';

        $.ajax({
            url: apiUrl + languageCode,
            method: 'GET',
            success: function (response) {
                $('#hello').text(response.hello);
            }
        });
 } )});
