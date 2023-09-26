import analyzer from "./analyzer.js";
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
//una referencia al textarea
const button = document.getElementById("reset-button"); // Selecciona el botón por su ID
const textarea = document.querySelector('textarea[name="user-input"]');
const botonborrar = document.querySelectorAll('li');
const eliminacontenido = Array.from(botonborrar).map((item) => item.innerHTML);
const wordCountElement = document.querySelector('[data-testid="word-count"]');
const characterElement = document.querySelector('[data-testid="character-count"]');
const sinEspaciosElement = document.querySelector('[data-testid="character-no-spaces-count"]');
const longitudElement = document.querySelector('[data-testid="word-length-average"]');
const recuentonumerosElement = document.querySelector('[data-testid="number-count"]');
const sumanumerosElement = document.querySelector('[data-testid="number-sum"]');

button.addEventListener("click", () => {
  textarea.value = "";
  botonborrar.forEach((item, index) => {
    item.innerHTML = eliminacontenido[index];
  });
});
textarea.addEventListener('input', function () {
  // con esto se obtiene el valor actual del textarea
  const texto = textarea.value;
  // Se usa el método getWordCount del objeto analyzer para calcular el recuento de palabras
  const wordCount = analyzer.getWordCount(texto);
  // verifica el elemento <li> con el recuento de palabras
  wordCountElement.textContent = `Recuento de Palabras: ${wordCount}`;
});
textarea.addEventListener('input', function () {
  const texto = textarea.value;
  const character = analyzer.getCharacterCount(texto);
  characterElement.textContent = `Recuento de Caracteres: ${character}`;
});
textarea.addEventListener('input', function () {
  const texto = textarea.value;
  const sinEspacios = analyzer.getCharacterCountExcludingSpaces(texto);
  sinEspaciosElement.textContent = `Recuento sin espacios: ${sinEspacios}`;
});
textarea.addEventListener('input', function () {
  const texto = textarea.value;
  const longitud = analyzer.getAverageWordLength(texto);
  longitudElement.textContent = `Longitud media de palabras: ${longitud}`;
});
textarea.addEventListener('input', function () {
  const texto = textarea.value;
  const recuentonumeros = analyzer.getNumberCount(texto);
  recuentonumerosElement.textContent = `Recuento de numeros: ${recuentonumeros}`;
});
textarea.addEventListener('input', function () {
  const texto = textarea.value;
  const sumanumeros = analyzer.getNumberSum(texto);
  sumanumerosElement.textContent = `Suma de numeros: ${sumanumeros}`;
});