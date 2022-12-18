let n = 15;

function teste(n) {
    let soma = 0;

    for (let i = n - 1 + 1; i >= 0; i--) {
        soma += i;
    }

    return soma;
}

console.log(teste(n))