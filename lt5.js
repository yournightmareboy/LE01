let teclado = require('prompt-sync')();
const peso = teclado("Digite seu peso:");
const altura = teclado("Digite sua altura:");

let p1 = parseFloat(peso);
let a1 = parseFloat(altura);
const imc = (p1 / (a1 * a1));

let categoria;
if (imc <= 18.5) {categoria = "Baixo Peso";} 
else if (imc <= 24.9) {categoria = "Peso Normal"; }
    else if (imc <= 29.9) {categoria = "Sobrepeso"; }
        else {categoria = "Obesidade";}
console.log(categoria);