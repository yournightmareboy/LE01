let teclado = require('prompt-sync')();
const idade = teclado("Digite sua idade:");

if (idade <= 12) {categoria = "Criança";}
 else if (idade <= 17) {categoria = "Adolescente"; }
    else if (idade <= 64) {categoria = "Adulto"; }
        else {categoria = "Idoso"}
console.log(categoria)  
