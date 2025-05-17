let teclado = require('prompt-sync')();
const v1 = teclado("Digite o primeiro valor:");
const v2 = teclado("Digite o segundo valor:");

let valor1 = parseFloat(v1);
let valor2 = parseFloat(v2);

if (valor1 === valor2) console.log("Os valores são iguais. Digite valores diferentes.");
    else if (valor1 < valor2) console.log(`Valores em ordem crescente: ${valor1}, ${valor2}`);
        else console.log(`Valores em ordem crescente: ${valor2}, ${valor1}`);