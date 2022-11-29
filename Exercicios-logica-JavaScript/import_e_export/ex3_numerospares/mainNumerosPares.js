/*
3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
*/

const { gets, print } = require('./funcoes-auxiliares');

const numeros = gets();
let numerosPares = [];

for (let i = 0; i < numeros; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado % 2 == 0) {
        numerosPares.push(numeroSorteado); // aqui foi usado um push para incluir os números pares em uma array específica.
    }
}

print('Números Pares: '+ numerosPares); // e por fim, aqui printamos a lista com os números pares definidos no for.

