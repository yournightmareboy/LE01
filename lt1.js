const prompt = require('prompt-sync')();
const numero = prompt("Digite um número inteiro:");

if (numero % 2 === 0) {console.log(`O número ${numero} é par.`);}
if (numero % 2 !== 0) {console.log(`O número ${numero} é ímpar.`);}