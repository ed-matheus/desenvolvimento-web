// Criar uma função que faça um número como argumento e retorne "Fizz", "Buzz" ou "FizzBuzz". 

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.

function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return 'FizzBuzz';
    } else if (num % 3 == 0) {
        return 'Fizz';
    } else if (num % 5 == 0) {
        return 'Buzz';
    } else {
        return num;
    }
}

console.log(fizzBuzz(15));