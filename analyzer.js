const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let palabrastotales = text.split(/\s+/).filter(Boolean);
    return palabrastotales.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let caracteresexcluyendo = text.replace(/[^\w]/g, '');
    return caracteresexcluyendo.length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let palabras = text.split(/\s+/).filter(palabra => palabra.trim() !== '');
    if (palabras.length === 0) {
      return 0;
    }
    const sumaLongitudes = palabras.reduce((acumulador, palabra) => acumulador + palabra.length, 0);
    const longitudPromedio = sumaLongitudes / palabras.length;
    return parseFloat(longitudPromedio.toFixed(2));
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let numerosretornar = text.match(/\b\d+(\.\d+)?\b/g);
    if (!numerosretornar) {
      return 0;
    }
    return numerosretornar.length;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let sum = 0;
    const numeros = text.match(/\b\d+(\.\d+)?\b/g);
    if (numeros) {
      for (let i = 0; i < numeros.length; i++) {
        sum += parseFloat(numeros[i]);
      }
    }
    return sum;
  },
};

export default analyzer;
