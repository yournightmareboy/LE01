let n1 = 0, n2 = 1, proximoTermo;

console.log("Os 10 primeiros números da sequência de Fibonacci são:");

for (let i = 1; i <= 10; i++) {
    console.log(n1);
    proximoTermo = n1 + n2;
    n1 = n2;
    n2 = proximoTermo;
}