async function getData(){
    const url = 'https://steam2.p.rapidapi.com/search/Counter/page/1';
    const response = await fetch(url,{
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1ca860bee0mshde4765ed11b3579p1a57bfjsn83ee599597d4',
		'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
	}
    });
return response.json();
}

const tablaResultados = document.getElementById("tabla-resultados");
	getData()
    .then(data=>{
        console.log(data);
        data.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.title}</td>
                <td><a href="${item.url}"><img src="${item.imgUrl}" alt="Imagen" width="100"><a/></td>
                <td>${item.price}</td>
            `;
            tablaResultados.appendChild(row);
        });
    })
    .catch(error => console.error('Error al cargar los datos de la API: ', error));
	