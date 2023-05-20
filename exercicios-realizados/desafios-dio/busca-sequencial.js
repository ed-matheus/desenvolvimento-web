// Neste desafio, dada uma estrutura de vetor A[a1, a2...an], percorra todo o vetor fazendo as comparações de A[N] = X.
// Caso a condição seja verdadeira, “X” existe na estrutura e a busca será concluída com sucesso.

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

const elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];

function buscaElemento(n) {
    const busca = elementos.includes(n);
    const posicao = elementos.indexOf(n);

    if (busca == true) {
        return 'Achei ' + n + ' na posição ' + posicao;
    } else {
        return 'Numero ' + n + ' não encontrado!';
    }
}

console.log(buscaElemento(75));
