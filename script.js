// document.addEventListener('DOMContentLoaded', function () {
//   const buscador = document.querySelector('.int1');
//   const movie = document.querySelectorAll('.movie');

//   buscador.addEventListener('input', function () {
//       const searchTerm = buscador.value.toLowerCase();

//       movie.forEach(movie => {
//           const title = movie.querySelector('h3');
//           const titleText = title.textContent.toLowerCase();

//           if (titleText.includes(searchTerm)) {
//               movie.style.display = 'block';
//           } else {
//               movie.style.display = 'none';
//           }
//       });
//   });
// });

// document.getElementById("searchInput").addEventListener("input", function() {
//     var searchTerm = this.value.trim().toLowerCase();
//     var h3Elements = document.querySelectorAll(".movie h3");

//     h3Elements.forEach(function(h3) {
//         var titleText = h3.textContent.trim().toLowerCase();
//         var parentMovie = h3.closest("h3");

//         // Utiliza includes para verificar si el título contiene el término de búsqueda
//         if (titleText.includes(searchTerm)) {
//             parentMovie.style.display = "block";
//         } else {
//             parentMovie.style.display = "none";
//         }
//     });
// });


document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        const searchText = e.target.value.toLowerCase();
        const titleMovies = document.querySelector('.titleMovies');

        if (searchText.trim() !== '') {
            titleMovies.style.display = 'none';
        } else {
            titleMovies.style.display = 'block';
        }

        document.querySelectorAll(".movie").forEach(movie => {
            const buttonContent = movie.querySelector("button.open-modal").textContent.toLowerCase();
            const paragraph = movie.querySelector(".texto-oculto").textContent.toLowerCase();

            if (buttonContent.includes(searchText) || paragraph.includes(searchText)) {
                movie.style.display = 'block';
            } else {
                movie.style.display = 'none';
            }
        });
    }
});