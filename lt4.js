let executando = true;

while (executando) {
    console.log("\nQual sua fruta preferida?");
    console.log("1. Banana");
    console.log("2. Morango");
    console.log("3. Melancia");
    
    let teclado = require('prompt-sync')();
    const escolha = teclado("Digite sua opção (1-3):");
    
    switch(escolha) {
        case "1": console.log("Aqui está uma receita com sua fruta preferida: Banana");
            break;
            
        case "2": console.log("Aqui está uma receita com sua fruta preferida: Morango");
            break;
            
        case "3": console.log("Aqui está uma receita com sua fruta preferida: Melancia");
            executando = false;
            break;
            
        default:
            console.log("Opção inválida! Digite 1, 2 ou 3.");
    }
}