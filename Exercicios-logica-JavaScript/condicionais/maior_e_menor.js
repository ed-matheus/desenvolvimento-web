/*
    Faça um programa que leia três números, verifique (usando if e else) e mostre o maior e o menor deles; 
*/

const n1 = 1
const n2 = 2
const n3 = 3

if (n1 > n2 && n1 > n3 && n2 < n1 && n2 < n3) {
    const maior = n1
    const menor = n2
    console.log(maior + ' é o maior, e ' + menor + ' é o menor.\n')

} else if (n1 > n2 && n1 > n3 && n3 < n1 && n3 < n2) {
    const maior = n1
    const menor = n3
    console.log(maior + ' é o maior, e ' + menor + ' é o menor.\n')

} else if (n2 > n1 && n2 > n3 && n1 < n2 && n1 < n3) {
    const maior = n2
    const menor = n1
    console.log(maior + ' é o maior, e ' + menor + ' é o menor.\n')

} else if (n2 > n1 && n2 > n3 && n3 < n1 && n3 < n2) {
    const maior = n2
    const menor = n3
    console.log(maior + ' é o maior, e ' + menor + ' é o menor.\n')

} else if (n3 > n1 && n3 > n2 && n1 < n2 && n1 < n3) {
    const maior = n3
    const menor = n1
    console.log(maior + ' é o maior, e ' + menor + ' é o menor.\n')

} else if (n3 > n1 && n3 > n2 && n2 < n1 && n2 < n3) {
    const maior = n3
    const menor = n2
    console.log(maior + ' é o maior, e ' + menor + ' é o menor.\n')
}
