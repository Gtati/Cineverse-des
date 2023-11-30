const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});


function verVideo(imagen) {
	// Obtenemos la URL del video
	var videoURL = imagen.getAttribute("data-video-url");
  
	// Obtenemos el elemento de video
	var video = document.querySelector("video");
  
	// Si el elemento de video no existe, lo creamos
	if (!video) {
	  video = document.createElement("video");
	  video.setAttribute("controls", "controls");
  
	  document.body.appendChild(video);
	}
  
	// Asignamos la URL del video al elemento de video
	video.src = videoURL;
  
	// Iniciamos la reproducción del video
	video.play();
  }
	function removeAccentsAndLowerCase(string) {
		return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
	}
	
	document.addEventListener("keyup", (e) => {
		if (e.target.matches("#buscador")) {
			if (e.key === "Escape") e.target.value = "";
			
	
			const searchTerm = removeAccentsAndLowerCase(e.target.value);
	
			document.querySelectorAll(".carousel").forEach((movie) => {
				const titleElement = movie.querySelector("h3");
				if (titleElement) {
					const movieTitle = removeAccentsAndLowerCase(titleElement.textContent);
	
					if (movieTitle.includes(searchTerm)) {
						movie.classList.remove("filtro");
						document.querySelectorAll(".open-modal").forEach((modalButton) => {
							modalButton.style.display = "none";
						});
					}        
					else {
						movie.classList.add("filtro");
						modalButton.style.display = "";
	
					}
				}
			});
		}
	});
	
	
	
	if (!searchTerm) {
		document.querySelectorAll(".open-modal").forEach((modalButton) => {
			modalButton.style.display = "none";
		});
	}
	
	function openModal(videoId) {
    var modal = document.getElementById("myModal");
    var video = document.getElementById("video");
    video.src = "https://www.youtube.com/embed/" + videoId;
    modal.style.display = "block";
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    var video = document.getElementById("video");
    video.src = "";
    modal.style.display = "none";
  }

  document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        if (e.key === "Escape") e.target.value = "";

        document.querySelectorAll(".movie").forEach(movie => {
            const title = movie.querySelector("h3");
            const image = movie.querySelector("img");
            const isMatch = title.textContent.toLowerCase().includes(e.target.value.toLowerCase());

            if (isMatch) {
                movie.style.display = "block"; // Mostrar el div .movie si hay coincidencia
                image.style.display = "block"; // Mostrar la imagen
            } else {
                movie.style.display = "none";  // Ocultar el div .movie si no hay coincidencia
                image.style.display = "none";  // Ocultar la imagen
            }
        });
    }
});