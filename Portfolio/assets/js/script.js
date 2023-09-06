const words = ["Estudiante IUE.", "Desarrollador Java.", "Desarrollador Php.", "Developer Konecta Group."];
const wordElement = document.getElementById("word");
let currentWordIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;

function animateTyping() {
  const currentWord = words[currentWordIndex];
  const cursor = document.querySelector(".cursor");
  cursor.style.visibility = "visible";
  if (!isDeleting) {
    wordElement.textContent = currentWord.slice(0, currentLetterIndex + 1);
    currentLetterIndex++;
    
    if (currentLetterIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(animateTyping, 3000); // Pausa después de completar la palabra
    } else {
      setTimeout(animateTyping, 30); // Velocidad de escritura
    }
  } else {
    wordElement.textContent = currentWord.slice(0, currentLetterIndex);
    currentLetterIndex--;
    
    if (currentLetterIndex === -1) {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
      setTimeout(animateTyping, 500); // Pausa antes de empezar a escribir la siguiente palabra
    } else {
      setTimeout(animateTyping, 20); // Velocidad de borrado
    }
  }
}

animateTyping();

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const carouselItems = document.querySelectorAll(".carousel-item1");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  let currentIndex = 0;

  // Función para mostrar la diapositiva actual
  function showSlide() {
      const translateX = -currentIndex * 50; // 50% por cada elemento
      carousel.style.transform = `translateX(${translateX}%)`;
  }

  // Función para avanzar al siguiente slide
  function nextSlide() {
      if (currentIndex < carouselItems.length - 1) {
          currentIndex++;
          showSlide();
      } else {
          currentIndex = 0;
          showSlide();
      }
  }

  // Event listener para el botón "Anterior"
  prevButton.addEventListener("click", function () {
      if (currentIndex > 0) {
          currentIndex--;
          showSlide();
      }
  });

  // Event listener para el botón "Siguiente"
  nextButton.addEventListener("click", function () {
      nextSlide();
  });

  // Cambiar automáticamente cada 10 segundos
  setInterval(nextSlide, 5000);

  // Mostrar la primera diapositiva al cargar la página
  showSlide();
});