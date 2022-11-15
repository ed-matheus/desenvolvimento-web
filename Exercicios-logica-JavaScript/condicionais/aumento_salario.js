/*
As organizações CSM resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para 
desenvolver o programa que calculará os reajustes.

Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, 
baseado no salário atual:

a. Salários até R$ 280, 00(incluindo): aumento de 20 %;
b. Salários entre R$ 280, 00 e R$700, 00: aumento de 15 %;
c. Salários entre R$ 700, 00 e R$ 1500, 00: aumento de 10 %;
d. Salários de R$ 1500, 00 em diante: aumento de 5 %

Após o aumento ser realizado, informe na tela:

a. O salário antes do reajuste;
b. O percentual de aumento aplicado;
c. O valor do aumento;
d. O novo salário, após o aumento.  
*/

const salario = 1230;

function calcValorAumento(salario, valorDesconto) {
    return salario * (valorDesconto/100);
}

if (salario <= 280.00) {
    const valorAumento = calcValorAumento(salario, 20);
    const novoSalario = salario + valorAumento;

    console.log('Salário Inicial = R$'+ salario.toFixed(2));
    console.log('Percentual do aumento = 20%');
    console.log('Valor do aumento = R$' + valorAumento.toFixed(2));
    console.log('Novo Salário = R$' + novoSalario.toFixed(2));

} else if (salario > 280.00 && salario <= 700.00) {
    const valorAumento = calcValorAumento(salario, 15);
    const novoSalario = salario + valorAumento;

    console.log('Salário Inicial = R$' + salario.toFixed(2));
    console.log('Percentual do aumento = 15%');
    console.log('Valor do aumento = R$' + valorAumento.toFixed(2));
    console.log('Novo Salário = R$' + novoSalario.toFixed(2));

} else if (salario > 700.00 && salario <= 1500.00) {
    const valorAumento = calcValorAumento(salario, 10);
    const novoSalario = salario + valorAumento;

    console.log('Salário Inicial = R$' + salario.toFixed(2));
    console.log('Percentual do aumento = 10%');
    console.log('Valor do aumento = R$' + valorAumento.toFixed(2));
    console.log('Novo Salário = R$' + novoSalario.toFixed(2));

} else if (salario >= 1500.00) {
    const valorAumento = calcValorAumento(salario, 5);
    const novoSalario = salario + valorAumento;

    console.log('Salário Inicial = R$' + salario.toFixed(2));
    console.log('Percentual do aumento = 5%');
    console.log('Valor do aumento = R$' + valorAumento.toFixed(2));
    console.log('Novo Salário = R$' + novoSalario.toFixed(2));
}