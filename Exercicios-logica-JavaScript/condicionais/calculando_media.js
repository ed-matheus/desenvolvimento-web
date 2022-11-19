/*
    Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a
    sua média e a sua classificação conforme a tabela abaixo.

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

function calcSoma(nota1, nota2, nota3) {
    return nota1 + nota2 + nota3;
}

const media = calcSoma(10, 7, 9) / 3;

if (media < 5) {
    console.log('Sua média é ' + media.toFixed(1) + ', está REPROVADO.')
} 
else if (media >= 5 && media <= 7) {
    console.log('Sua média é ' + media.toFixed(1) + ', está de RECUPERAÇÃO.')
}
else {
    console.log('Sua média é ' + media.toFixed(1) + ', está APROVADO.')
}