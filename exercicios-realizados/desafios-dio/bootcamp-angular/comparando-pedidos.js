/*
O objetivo desse desafio é criar um programa em JavaScript que compare dois objetos JSON de pedidos de entrega 
e determine se eles possuem ou não as mesmas informações. 

O programa deve criar dois objetos JSON contendo o nome do cliente, além do nome e preço de um item selecionado.
*/

// JSON do Cliente 1
const cliente1 = { 
    nome: 'Fulano', 
    item: 'Hamburguer', 
    preco: parseFloat(15.00)
};

// JSON do Cliente 2
const cliente2 = { 
    nome: 'Kleiton', 
    item: 'Pastel', 
    preco: parseFloat(10.00) 
};

//TODO: Comparar os JSONs dos Clientes, verificando se todas as propriedades são iguais.
function comparaClientes() {
    if (cliente1.nome == cliente2.nome && cliente1.item == cliente2.item && cliente1.preco == cliente2.preco) {
        return 'Os pedidos são iguais'
    }

    return 'Os pedidos são diferentes'
}

//TODO: Imprimir a saída conforme o enunciado deste desafio.
console.log(comparaClientes())