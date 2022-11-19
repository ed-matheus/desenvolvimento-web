class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function compararIdades(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(p1.nome +' é o mais velho(a).');
    } else if (p2.idade > p1.idade) {
        console.log(p2.nome + ' é o mais velho(a).');
    } else {
        console.log(p1.nome +' e '+ p2.nome +' tem a mesma idade.');
    }
}

const p1 = new Pessoa('Matheus', 20);
const p2 = new Pessoa('Gustavo', 21);

compararIdades(p1, p2);