document.addEventListener('DOMContentLoaded', function () {
  const buscador = document.querySelector('.int1');
  const movie = document.querySelectorAll('.movie');

  buscador.addEventListener('input', function () {
      const searchTerm = buscador.value.toLowerCase();

      movies.forEach(movie => {
          const title = movie.querySelector('h3');
          const titleText = title.textContent.toLowerCase();

          if (titleText.includes(searchTerm)) {
              movie.style.display = 'block';
          } else {
              movie.style.display = 'none';
          }
      });
  });
});


