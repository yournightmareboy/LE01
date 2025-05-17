let teclado = require('prompt-sync')();
const a1 = teclado("Digite o valor do lado A:");
const b2 = teclado("Digite o valor do lado B:");
const c3 = teclado("Digite o valor do lado C:");

let ladoA = parseFloat(a1);
let ladoB = parseFloat(b2);
let ladoC = parseFloat(c3);

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB)
    if (ladoA === ladoB && ladoB === ladoC) console.log("Os lados formam um triângulo equilátero.");
        else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) console.log("Os lados formam um triângulo isósceles.");
            else console.log("Os lados formam um triângulo escaleno.");
                else console.log("Os valores fornecidos não formam um triângulo.");

