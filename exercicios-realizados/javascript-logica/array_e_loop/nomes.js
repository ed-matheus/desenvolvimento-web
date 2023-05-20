// Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ['Cleiton', 'Vagner', 'Camilo', 'Vanessa', 'Matheus', 'Kleber', 'Vitor'];

for (let i = 0; i < nomes.length; i++) {
    const nomeSorteado = nomes[i];
    // foi usado o método indexOf para buscar a letra "V" em cada nome, neste caso retornando true ou false.
    const result = nomeSorteado.indexOf("V") > -1; 
    if (result == true) {
        console.log(nomeSorteado);
    }
}

/* 
Deste modo, a saída será, respectivamente:
    Vagner
    Vanessa
    Vitor
*/
