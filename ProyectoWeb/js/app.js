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

let juegos = [];
const tablaResultados = document.getElementById("resultados");
getData()
    .then(data => {
        console.log(data);
        juegos = data;
        let count = 0;

        data.forEach(item => {


            if (count < 8) {
                const divElement = document.createElement("div");
                divElement.classList.add('game');
                divElement.innerHTML = `
                <h5>${item.title}</h5>
                <h5><a href="${item.url}"><img src="${item.imgUrl}" alt="Imagen" width="100"><a/></h5>
                <h5>${item.price}</h5>
            `;
                tablaResultados.appendChild(divElement);
                count++;
            }
        });
    })
    .catch(error => console.error('Error al cargar los datos de la API: ', error));
