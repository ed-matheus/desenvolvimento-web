// Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

let listaDePares = [];

/*
dentro do for, coloquei "50+1" para que o código pegue também o número 50, o que não acontece
caso permaneça apenas o número 50 (pode ser colocado 51 também).
*/
for (let i = 10; i < 50+1; i++) {
    const numero = i;
    // se o caso der "match" com a condição, o número é incluído na lista vazia que foi criada no início do código.
    if (numero % 2 == 0) {
        listaDePares.push(numero);
    }
}

console.log(listaDePares)

/*
Dessa forma, a saída será exatamente assim:

[
  10, 12, 14, 16, 18, 20, 22,
  24, 26, 28, 30, 32, 34, 36,
  38, 40, 42, 44, 46, 48, 50
]

*/