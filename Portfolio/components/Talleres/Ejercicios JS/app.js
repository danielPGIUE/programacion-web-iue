// Ejercicio 1
alert("Ejercicio 1");
let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad:"));

let mensaje = `Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edad + 1} años.`;

console.log(mensaje);

alert(mensaje);

// Ejercicio 2
alert("Ejercicio 2");
// Solicitar la figura de la cual se quiere calcular el área
let figura = prompt("Ingrese la figura para calcular el área (triangulo, rectangulo o circulo):");
// Verificar la figura ingresada y realizar el cálculo correspondiente
if (figura === "triangulo") {
  let base = parseFloat(prompt("Ingrese la base del triángulo:"));
  let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
  let area = (base * altura) / 2;
  alert(`El área del triángulo es: ${area}`);
} else if (figura === "rectangulo") {
  let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
  let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
  let area = base * altura;
  alert(`El área del rectángulo es: ${area}`);
} else if (figura === "circulo") {
  let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
  let area = Math.PI * Math.pow(radio, 2);
  alert(`El área del círculo es: ${area}`);
} else {
  alert("Figura no reconocida. Por favor, ingrese triángulo, rectángulo o círculo.");
}

// Ejercicio 3
alert("Ejercicio 3");
let nu = parseInt(prompt("Ingrese un número:"));

for (let i = 1; i <= nu; i++) {
  if (i % 2 === 0) {
    alert(i + " es par");
  } else {
    alert(i + " es impar");
  }
}

//Ejercicio 4
alert("Ejercicio 4");
let numero = parseInt(prompt("Ingrese un número entero mayor que 1:"));

let esPrimo = true;

if (numero <= 1) {
  esPrimo = false;
} else {
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }
}

if (esPrimo) {
  alert(numero + " es un número primo.");
} else {
  alert(numero + " no es un número primo.");
}

// Ejercicio 5
alert("Ejercicio 5");
let nu2 = parseInt(prompt("Ingrese un número entero mayor que cero:"));

let factorial = 1;

if (nu2 <= 0) {
  console.log("El número debe ser mayor que cero.");
} else {
  for (let i = 1; i <= nu2; i++) {
    factorial *= i;
  }
  alert(`El factorial de ${nu2} es: ${factorial}`);
}

// Ejercicio 6
alert("Ejercicio 6");
let suma = 0;
let contador = 0;

while (suma < 50) {
  let nu3 = parseFloat(prompt("Ingrese un número:"));
  suma += nu3;
  contador++;
}

alert("Total acumulado: " + suma);
alert("Cantidad de números introducidos: " + contador);

// Ejercicio 7

alert("Ejercicio 7");
let numeros = [5, 8, 3, 2, 9];
let pares = [];
let impares = [];

for (let i = 0; i < numeros.length; i++) {
  let aleatorio = Math.floor(Math.random() * 10) + 1;
  let resultado = numeros[i] * aleatorio;

  console.log(`${numeros[i]} x ${aleatorio} = ${resultado}`);

  if (resultado % 2 === 0) {
    pares.push(resultado);
  } else {
    impares.push(resultado);
  }
}
alert("Array de números pares:"+ pares);
alert("Array de números impares:"+ impares);
console.log("Array de números pares:", pares);
console.log("Array de números impares:", impares);

// Ejercicio 8
alert("Ejercicio 8");
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let numeroDNI = parseInt(prompt("Ingrese el número de DNI:"));

if (numeroDNI >= 0 && numeroDNI <= 99999999) {
  let posicionLetra = numeroDNI % 23;
  let letra = letras[posicionLetra];

  alert("La letra correspondiente al número de DNI"+ numeroDNI+ "es:"+ letra);
  console.log("La letra correspondiente al número de DNI", numeroDNI, "es:", letra);
} else {
  console.log("El número de DNI ingresado no es válido.");
  alert("El número de DNI ingresado no es válido.");
}

// Ejercicio 9
alert("Ejercicio 9");
let palabra = prompt("Ingrese una palabra:");
let longitud = palabra.length;
let vocales = 0;
let consonantes = 0;

// Convertimos la palabra a minúsculas para facilitar la comprobación de vocales y consonantes
palabra = palabra.toLowerCase();

for (let i = 0; i < longitud; i++) {
  let letra = palabra[i];

  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    vocales++;
  } else if (letra >= 'a' && letra <= 'z') {
    consonantes++;
  }
}

console.log("Número de consonantes:", consonantes);
console.log("Número de vocales:", vocales);
console.log("Longitud de la palabra:", longitud);

alert("Número de consonantes:"+ consonantes);
alert("Número de vocales:"+ vocales);
alert("Longitud de la palabra:"+ longitud);

// Ejercicio 10
alert("Ejercicio 10");
const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

let colorUsuario = prompt("Ingrese un color:");

// Convertimos el color ingresado por el usuario a minúsculas para hacer una comparación sin distinción de mayúsculas y minúsculas
colorUsuario = colorUsuario.toLowerCase();

if (colores.includes(colorUsuario)) {
  console.log("El color", colorUsuario, "se encuentra en el array.");
  alert("El color"+ colorUsuario+ "se encuentra en el array.");
} else {
  console.log("El color", colorUsuario, "no se encuentra en el array.");
  alert("El color"+ colorUsuario+ "no se encuentra en el array.");
}
