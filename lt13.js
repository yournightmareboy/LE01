let teclado = require('prompt-sync')();

let soma = 0;
let quantidade = 0;
let numero;

console.log("Digite os números decimais e quando quiser calcular a média, digite 0:");

do {
    numero = parseFloat(teclado("Número: "));
    if (numero !== 0) {soma += numero;
        quantidade++;
    }} 
        while (numero !== 0);

if (quantidade > 0) {
    const media = soma / quantidade;
    console.log(`Média aritmética: ${media.toFixed(2)}`);}
        else {console.log("Nenhum número foi digitado para cálculo da média.");}