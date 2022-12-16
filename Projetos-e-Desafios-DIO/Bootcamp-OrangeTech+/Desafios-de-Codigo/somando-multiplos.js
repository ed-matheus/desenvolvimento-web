// Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

//TODO: Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

const a = 5;
const N = 20;
const numList = [];
let soma = 0;

for (let i = 1; i < 10+1; i++) {
    const mult = i * a;
    numList.push(mult);

    if (mult == N) {
        break;
    }
}

for (let i = 0; i < numList.length; i++) {
    soma += numList[i];
}

console.log(soma);
