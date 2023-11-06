// Datos de ejemplo de juegos
const juegos = [
    { nombre: 'Juego 1', plataforma: 'PC' },
    { nombre: 'Juego 2', plataforma: 'PlayStation' },
    { nombre: 'Juego 3', plataforma: 'Xbox' },
    { nombre: 'Juego 4', plataforma: 'Nintendo Switch' },
    { nombre: 'Juego 5', plataforma: 'PC' },
    { nombre: 'Juego 6', plataforma: 'PlayStation' },
    { nombre: 'Juego 7', plataforma: 'Xbox' },
    { nombre: 'Juego 8', plataforma: 'Nintendo Switch' },
    { nombre: 'Juego 9', plataforma: 'PC' },
    { nombre: 'Juego 10', plataforma: 'PlayStation' },
    { nombre: 'Juego 11', plataforma: 'Xbox' },
    { nombre: 'Juego 12', plataforma: 'Nintendo Switch' },
    { nombre: 'Juego 13', plataforma: 'PC' },
    { nombre: 'Juego 14', plataforma: 'PlayStation' },
    { nombre: 'Juego 15', plataforma: 'Xbox' },
    { nombre: 'Juego 16', plataforma: 'Nintendo Switch' },
    { nombre: 'Juego 17', plataforma: 'PC' },
    { nombre: 'Juego 18', plataforma: 'PlayStation' },
    { nombre: 'Juego 19', plataforma: 'Xbox' },
    { nombre: 'Juego 20', plataforma: 'Nintendo Switch' },
    { nombre: 'Juego 21', plataforma: 'PC' },
    { nombre: 'Juego 22', plataforma: 'PlayStation' },
    { nombre: 'Juego 23', plataforma: 'Xbox' },
    { nombre: 'Juego 24', plataforma: 'Nintendo Switch' },
    { nombre: 'Juego 25', plataforma: 'PC' },
];

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

    catalogo.innerHTML = '';

    juegosEnPagina.forEach(juego => {
        const juegoElement = document.createElement('div');
        juegoElement.innerHTML = `
            <h2>${juego.nombre}</h2>
            <p>Plataforma: ${juego.plataforma}</p>
        `;
        catalogo.appendChild(juegoElement);
    }
    );
    // Si no hay más juegos para cargar, ocultar el botón "Cargar Más"
    if (inicio + juegosPorPagina >= juegos.length) {
        cargarMasBtn.style.display = 'none';
    }else{
        cargarMasBtn.style.display = 'block';
    }

    const busqueda = busquedaInput.value.toLowerCase();
    const juegosFiltrados = juegosEnPagina.filter(juego => juego.nombre.toLowerCase().includes(busqueda));

    catalogo.innerHTML = '';

    juegosFiltrados.forEach(juego => {
        const juegoElement = document.createElement('div');
        juegoElement.innerHTML = `
            <h2>${juego.nombre}</h2>
            <p>Plataforma: ${juego.plataforma}</p>
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

