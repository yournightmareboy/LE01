let teclado = require('prompt-sync')();
const nota = teclado("Digite sua nota de 0 a 10:");

if (nota <= 5) {console.log("Reprovado");}
else if (nota >=8) {console.log("Aprovado");}
else {console.log("Recuperação");}