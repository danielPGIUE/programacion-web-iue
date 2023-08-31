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