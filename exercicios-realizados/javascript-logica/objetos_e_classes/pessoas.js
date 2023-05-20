/*
    2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura, e peça ao José para dizer o valor 
    do seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura)
    }

    classificaIMC() {
        const imc = this.calculaIMC()
        if (imc < 18.5) {
            return ('Abaixo do peso.');
        } else if (imc >= 18.5 && imc <= 24.9) {
            return ('Peso normal.');
        } else if (imc >= 25 && imc <= 29.9) {
            return ('Sobrepeso.');
        } else {
            return ('Obesidade.');
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log('IMC do José = '+ jose.classificaIMC());//Usado 'toFixed(2)' para pegar no máximo duas casas decimais.

const matheus = new Pessoa('Matheus', 60, 1.86);
console.log('IMC do Matheus = ' + matheus.classificaIMC());

