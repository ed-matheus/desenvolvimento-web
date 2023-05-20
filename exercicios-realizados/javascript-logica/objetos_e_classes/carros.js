/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que, dado a quantidade de Km e o preço do combustível, nos dê o valor
    gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio.toFixed(3);
    }

    calcValorGastoPercurso(distanciaKm, precoCombustivel) {
        return (distanciaKm * this.gastoMedio) * precoCombustivel;
    }
};

// imprimindo os dados do carro, incluindo seu gasto médio de combustível, especificamente.
const corolla = new Carro('Toyota', 'Preto', 1/12);
console.log(corolla);
console.log('Gasto em Reais para realizar o percurso = R$' + corolla.calcValorGastoPercurso(70, 5).toFixed(2) +'\n');

// incluindo outro carro na classe...
const gol = new Carro('Wolswagen', 'Vermelho', 1/13);
console.log(gol);
console.log('Gasto em Reais para realizar o percurso = R$' + gol.calcValorGastoPercurso(70, 5).toFixed(2));
