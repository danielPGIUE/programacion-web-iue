const words = [
  "Estudiante IUE.",
  "Desarrollador Java.",
  "Desarrollador Php.",
  "Developer Konecta Group.",
];
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
  console.log("11");
  const carousel1 = document.querySelector(".carousel1");
  const carousel2 = document.querySelector(".carousel2");
  const carousel3 = document.querySelector(".carousel3");
  const carousel4 = document.querySelector(".carousel4");
  const carouselItems1 = document.querySelectorAll(".carousel-item1");
  const carouselItems2 = document.querySelectorAll(".carousel-item2");
  const carouselItems3 = document.querySelectorAll(".carousel-item3");
  const carouselItems4 = document.querySelectorAll(".carousel-item4");
  const prevButton1 = document.getElementById("prevButton1");
  const nextButton1 = document.getElementById("nextButton1");
  const prevButton2 = document.getElementById("prevButton2");
  const nextButton2 = document.getElementById("nextButton2");
  const prevButton3 = document.getElementById("prevButton3");
  const nextButton3 = document.getElementById("nextButton3");
  const prevButton4 = document.getElementById("prevButton4");
  const nextButton4 = document.getElementById("nextButton4");
  let currentIndex1 = 0;
  let currentIndex2 = 0;
  let currentIndex3 = 0;
  let currentIndex4 = 0;

  // Función para mostrar la diapositiva actual
  function showSlide1() {
    const translateX1 = -currentIndex1 * 50; // 50% por cada elemento
    carousel1.style.transform = `translateX(${translateX1}%)`;
 
  }
  function showSlide2() {
   
    const translateX2 = -currentIndex2 * 50; // 50% por cada elemento;
    carousel2.style.transform = `translateX(${translateX2}%)`;
  }
  function showSlide3() {
    const translateX3 = -currentIndex3 * 50; // 50% por cada elemento;
    carousel3.style.transform = `translateX(${translateX3}%)`;
  }
  function showSlide4() {
    const translateX4 = -currentIndex4 * 50; // 50% por cada elemento;
    carousel4.style.transform = `translateX(${translateX4}%)`;
  }


  // Función para avanzar al siguiente slide
  function nextSlide1() {
    if (currentIndex1 < carouselItems1.length - 1) {
      currentIndex1++;
      showSlide1();
    } else {
      currentIndex1 = 0;
      showSlide1();
    }
  }
  function nextSlide2() {
    if (currentIndex2 < carouselItems2.length - 1) {
      currentIndex2++;
      showSlide2();
    } else {
      currentIndex2 = 0;
      showSlide2();
    }
  }
  function nextSlide3() {
    if (currentIndex3 < carouselItems3.length - 1) {
      currentIndex3++;
      showSlide3();
    } else {
      currentIndex3 = 0;
      showSlide3();
    }
  }

  function nextSlide4() {
    if (currentIndex4 < carouselItems4.length - 1) {
      currentIndex4++;
      showSlide4();
    } else {
      currentIndex4 = 0;
      showSlide4();
    }
  }

  // Event listener para el botón "Anterior"
  prevButton1.addEventListener("click", function () {
    if (currentIndex1 > 0) {
      currentIndex1--;
      showSlide1();
    }
  });
// Event listener para el botón "Siguiente"
nextButton1.addEventListener("click", function () {
  nextSlide1();
  
});
  // Event listener para el botón "Siguiente"
  nextButton2.addEventListener("click", function () {
    nextSlide2();
    
  });

  prevButton2.addEventListener("click", function () {
    if (currentIndex2 > 0) {
      currentIndex2--;
      showSlide2();
    }
  });

  nextButton3.addEventListener("click", function () {
    nextSlide3();
    
  });

  prevButton3.addEventListener("click", function () {
    if (currentIndex3 > 0) {
      currentIndex3--;
      showSlide3();
    }
  });

  nextButton4.addEventListener("click", function () {
    nextSlide4();
    
  });

  prevButton4.addEventListener("click", function () {
    if (currentIndex4 > 0) {
      currentIndex4--;
      showSlide4();
    }
  });

  // Cambiar automáticamente cada 10 segundos
  setInterval(nextSlide1, 5000);
  setInterval(nextSlide2, 5000);
  setInterval(nextSlide3, 5000);
  setInterval(nextSlide4, 5000);
  // Mostrar la primera diapositiva al cargar la página
  showSlide1();
  showSlide2();
  showSlide3();
  showSlide4();
});
