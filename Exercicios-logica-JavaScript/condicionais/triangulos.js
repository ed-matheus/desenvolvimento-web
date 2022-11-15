/*
Faça um programa que peça os 3 lados de um triângulo.
O programa deverá informar se os valores podem ser um triângulo.
Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
*/

function calcTriangulo(a, b, c) {
    return a + b + c;
}

const a = 2;
const b = 3;
const c = 6;

const calc = calcTriangulo(a, b, c)

if (a == b && a == c) {
    console.log('Triângulo Equilátero.');

} else if (a + b > c && a + c > b && b + c > a) {
    console.log('Triângulo Isósceles.'); 

} else {
    console.log('Triângulo Escaleno.');
}
