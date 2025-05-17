let teclado = require('prompt-sync')();

const numero = parseInt(teclado("Digite um número para calcular seu fatorial: "));

if (numero < 0) {
    console.log("Fatorial não está definido para números negativos.");} 
    else
        {let fatorial = 1;
        let contador = numero;}
    
    while (contador > 1) {fatorial *= contador; contador--;
    }
    console.log(`O fatorial de ${numero} é ${fatorial}`);