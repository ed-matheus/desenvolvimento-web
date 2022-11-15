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
