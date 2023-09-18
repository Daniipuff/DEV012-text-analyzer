import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const totalpalabras = document.querySelector('textarea[name="user-input"]');

function tpalabras(){
let texto =document.getElementById("user-input").value;
getwordCount(totalpalabras);
}

