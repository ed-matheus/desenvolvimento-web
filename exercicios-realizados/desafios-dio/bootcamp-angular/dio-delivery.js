/*
A empresa DIO Delivery precisa calcular o valor total de um pedido e imprimir na tela as seguintes informações: 
o nome do cliente, o endereço de entrega e o total do pedido, incluindo a taxa de entrega, fixa de R$ 5.00.
*/

//Aqui cria-se o objeto pedido com as informações do cliente, endereço, itens do pedido e taxa:
const pedido = {
    cliente: 'João',
    endereco: 'Rua B, 456',
    itens: [
        { nome: 'Hamburguer', preco: 15 },
        { nome: 'Batata frita', preco: 8 }
    ],
    taxaEntrega: 5.0
};

//TODO: Percorra o array de itens do pedido e calcule o seu valor total.
let soma = 0;
for (let i = 0; i < pedido.itens.length; i++) {
    soma += pedido.itens[i].preco;
}

const totalCalculado = soma + pedido.taxaEntrega;

//TODO: Imprima a saída no padrão descrito neste desafio.
console.log(`Pedido: ${pedido.cliente}`);
console.log(`Endereco de entrega: ${pedido.endereco}`);
console.log(`Total: R$ ${totalCalculado}.00`);

/*
A Saída:
    Pedido: João
    Endereco de entrega: Rua B, 456
    Total: R$ 28.00
*/