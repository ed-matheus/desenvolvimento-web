/*
Seu desafio é criar um código em JavaScript que percorra uma array de dois objetos JSON contendo informações sobre os restaurantes, exibindo o nome e a avaliação do restaurante com a melhor avaliação.
*/

const restaurantes = [
{
    nome: 'DIO', 
    avaliacao: parseFloat(5.0)
},
{
    nome: 'Feijuca', 
    avaliacao: parseFloat(4.5)
}
];

//TODO: Usando o array acima identifique o restaurante com a melhor avaliação.
//Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
//Referência: https://stackoverflow.com/a/34087850/3072570
const restaurante = restaurantes.reduce((n, valor) => {
    return (valor.avaliacao > n.avaliacao) ? valor : n
});

//TODO: Imprima a saída de acordo com o enunciado deste desafio.
console.log(`Restaurante: ${restaurante.nome}, Avaliação: ${restaurante.avaliacao.toFixed(1)}`)

// A saída é igual ao restaurante mais bem avaliado:
/*
Restaurante: DIO, Avaliação: 5.0
*/