let teclado = require('prompt-sync')();
const q1 = teclado("Digite a quantidade de maçãs compradas:");

let quantidade = parseFloat(q1);
const precoMenosQueDoze = 0.30;
const precoDozeOuMais = 0.25;

let valorTotal;
    if (quantidade < 12) valorTotal = quantidade * precoMenosQueDoze;
        else valorTotal = quantidade * precoDozeOuMais;

console.log(`Você comprou ${quantidade} maçãs.`);
console.log(`Valor total da compra: R$ ${valorTotal.toFixed(2)}`);