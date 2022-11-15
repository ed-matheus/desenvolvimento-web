/*
Elabore um algoritmo que, dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo.

Fórmula do IMC:
IMC = peso / (altura * altura)

IMC em adultos:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;
*/

function calcIMC(peso, altura) {
    return peso / (altura * altura);
}

const imc = calcIMC(61, 1.86);

if (imc < 18.5) {
    console.log('Abaixo do Peso')
}
else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso Normal')
}
else if (imc > 25 && imc <= 30) {
    console.log('Acima do Peso')
}
else if (imc > 30 && imc <= 40) {
    console.log('Obeso')
}
else if (imc > 40) {
    console.log('Obesidade Grave')
}