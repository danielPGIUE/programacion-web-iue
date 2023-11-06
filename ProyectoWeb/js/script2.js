// Datos de ejemplo de juegos
async function getData() {
    const url = 'https://steam2.p.rapidapi.com/search/Counter/page/1';
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1ca860bee0mshde4765ed11b3579p1a57bfjsn83ee599597d4',
            'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
    });
    return response.json();
}

async function getPrice(price) {
    const url = 'https://steam2.p.rapidapi.com/appDetail/'+price;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1ca860bee0mshde4765ed11b3579p1a57bfjsn83ee599597d4',
            'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
    });
    return response.json();
}

let juegos = [];
getData()
    .then(data => {
        console.log(data);
        juegos = data;
    })
    .catch(error => console.error('Error al cargar los datos de la API: ', error));

setTimeout(function () {
    // Tu código JavaScript que quieres ejecutar después de 5 segundos
    const catalogo = document.getElementById('catalogo');
    const cargarMasBtn = document.getElementById('cargar-mas');
    const busquedaInput = document.getElementById('busqueda'); // Agregamos una referencia al campo de búsqueda
    const retrocederBtn = document.getElementById('retroceder');
    let paginaActual = 1;
    const juegosPorPagina = 5;
    console.log(paginaActual);
    function mostrarJuegosEnPagina() {
        const inicio = (paginaActual - 1) * juegosPorPagina;
        const fin = inicio + juegosPorPagina;

        const juegosEnPagina = juegos.slice(inicio, fin);
        console.log("juegos en ag", juegosEnPagina);
        catalogo.innerHTML = '';

        juegosEnPagina.forEach(juego => {
            const juegoElement = document.createElement("div");
            juegoElement.classList.add('game');
            juegoElement.innerHTML = `
                <h5>${juego.title}</h5>
                <h5><a href="${juego.url}"><img src="${juego.imgUrl}" alt="Imagen" width="100"><a/></h5>
                
                <h5>${juego.price}</h5>
        `;
            catalogo.appendChild(juegoElement);
        }
        );
        // Si no hay más juegos para cargar, ocultar el botón "Cargar Más"
        if (inicio + juegosPorPagina >= juegos.length) {
            cargarMasBtn.style.display = 'none';
        } else {
            cargarMasBtn.style.display = 'block';
        }

        const busqueda = busquedaInput.value.toLowerCase();
        const juegosFiltrados = juegosEnPagina.filter(juego => juego.title.toLowerCase().includes(busqueda));

        catalogo.innerHTML = '';

        juegosFiltrados.forEach(juego => {
            const juegoElement = document.createElement("div");
            juegoElement.classList.add('game');
            juegoElement.innerHTML = `
            <form action="details.html" method="GET">
            <h5>${juego.title}</h5>
            <h5><a href="${juego.url}"><img src="${juego.imgUrl}" alt="Imagen" width="100"><a/></h5>
            
                <input hidden="true" type="text" id="gameId" name="gameId" value="${juego.appId}"/>
                <input hidden="true" type="text" id="gameUrl" name="gameUrl" value="${juego.url}"/>
                <input type="submit" value="Seleccionar"/>
            </form>
        `;
            catalogo.appendChild(juegoElement);
        });
    }
    function actualizarBotonDeRetroceso() {

        if (paginaActual > 1) {
            retrocederBtn.style.display = 'block';
        } else {
            retrocederBtn.style.display = 'none';
        }

    }
    function cargarMasJuegos() {
        paginaActual++;
        mostrarJuegosEnPagina();
        actualizarBotonDeRetroceso();
    }
    // Evento para retroceder una página
    retrocederBtn.addEventListener('click', () => {
        if (paginaActual > 1) {
            paginaActual--;
            mostrarJuegosEnPagina();
            actualizarBotonDeRetroceso();
        }
    });

    // Agregar un evento de cambio en el campo de búsqueda
    busquedaInput.addEventListener('input', () => {
        paginaActual = 1; // Reiniciar la página a 1 cuando se realiza una búsqueda
        mostrarJuegosEnPagina();
    });

    cargarMasBtn.addEventListener('click', cargarMasJuegos);

    // Mostrar los primeros juegos al cargar la página
    mostrarJuegosEnPagina();
    actualizarBotonDeRetroceso();
}, 5000); // 5000 milisegundos equivalen a 5 segundos
