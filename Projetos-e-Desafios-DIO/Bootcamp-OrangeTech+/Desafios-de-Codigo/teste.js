// listas vazias
const multList1 = [];
const multList2 = [];

// incluindo os múltiplos de 3 e 5 em suas listas, respectivamente.
for (let i = 1; i < 10 + 1; i++) {
    const mult1 = 3 * i;
    multList1.push(mult1);
    const mult2 = 5 * i;
    multList2.push(mult2);
}

// função que retorna o resultado esperado, de acordo com o argumento ao imprimir.
function fizzBuzz(num) {
    // testes para verificar os múltiplos/se o número existe na array (tabuada)...
    const teste1 = multList1.includes(num);
    const teste2 = multList2.includes(num);

    // aqui, o resultado vem de acordo com os últimos testes, a cadeia de If...
    if (teste1 == true && teste2 == true) {
        return 'FizzBuzz';

    } else if (teste1 == true) {
        return 'Fizz';

    } else if (teste2 == true) {
        return 'Buzz';

    } else {
        return num;
    }
}

console.log(fizzBuzz(15));
