/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

    Exemplo:
        Entrada:
        4
        100
        150
        90
        200

        Saída:
        Maior número: 200
        Menor número: 90
*/

const { gets, print } = require('./funcoes-auxiliares');

const conjuntoDeNumeros = gets();
let maiorNumero = 0;
let menorNumero = 0;

for (let i = 0; i < conjuntoDeNumeros; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorNumero) {
        maiorNumero = numeroSorteado;
    } else {
        menorNumero = numeroSorteado;
    }
}

print('Maior número: ' + maiorNumero +'\nMenor número: '+ menorNumero);
