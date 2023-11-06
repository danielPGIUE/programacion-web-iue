async function getDetails(id) {
    const url = 'https://steam2.p.rapidapi.com/appDetail/'+id;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1ca860bee0mshde4765ed11b3579p1a57bfjsn83ee599597d4',
            'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
    });
    return response.json();
}

// Función para obtener el valor del parámetro de la URL
function obtenerParametro(id) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(id);
}

// Obtener el valor del parámetro "parametro" de la URL
const parametro = obtenerParametro('gameId');
const parametro2 = obtenerParametro('gameUrl');

if (parametro &&  parametro2) {
    const juegoDetalles = document.getElementById('parametroMostrado');
    getDetails(parametro)
    .then(juego => {
        console.log(juego);
        const juegoElement = document.createElement("div");
            juegoElement.classList.add('game');
            juegoElement.innerHTML = `
                <h5>${juego.title}</h5>
                <h5><a href="${parametro2}"><img src="${juego.imgUrl}" alt="Imagen" width="100"><a/></h5>
                <h5>${juego.description}</h5>
                <h5>${juego.price}</h5>
                <a href="${parametro2}">Comprar<a/>
        `;
        juegoDetalles.appendChild(juegoElement);
    })
    .catch(error => console.error('Error al cargar los datos de la API: ', error));
}

