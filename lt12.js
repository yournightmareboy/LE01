let teclado = require('prompt-sync')();
const numero = teclado("Digite um número de 1 a 10 para ver sua tabuada:");

console.log(`Tabuada do ${numero}:`);

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}
