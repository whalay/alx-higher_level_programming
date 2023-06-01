//Write a JavaScript script that fetches and lists the title for all movies by using this URL: https://swapi-api.alx-tools.com/api/films/?format=json

$.ajax({
    url: 'https://swapi-api.alx-tools.com/api/films/?format=json',
    method: 'GET',
    success: function(response) {
        var movies = response.results;
        var list = $('#list_movies');

        $.each(movies, function(index, movie) {
          var listItem = $('<li>').text(movie.title);
          list.append(listItem);
        });
      }
});
