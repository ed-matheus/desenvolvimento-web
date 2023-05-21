/*
Sua tarefa é criar um programa em JavaScript que leia os dados de um pedido, que incluem (principalmente) as informações do Cliente. 
Com os dados de entrada em mãos, seu programa deve apresentá-los em uma tela (Saída) para os entregadores orquestrarem as entregas dos pedidos.
*/

// Criando um objeto chamado "pedido" as seguintes propriedades:
const pedido = {
    cliente: {
      nome: 'Ana',       // Lê a primeira linha da "Entrada": Nome do Cliente.
      endereco: 'Rua DIO, 5',   // Lê a segunda linha da "Entrada": Endereço do Cliente.
    },
    id: parseInt(12), // Lê a terceira linha da "Entrada": ID do Pedido.
};

//TODO: Leia a quarta linha da "Entrada": Telefone do Cliente.
//TODO: Crie dinamicamente a propriedade "telefone" no objeto JSON "pedido.cliente".
pedido.cliente.telefone = '1111-9999'

  //TODO: Imprima a saída formatada de acordo com este desafio.
console.log(`Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}`)
console.log(`ID: ${pedido.id}`)
console.log(`Tel: ${pedido.cliente.telefone}`)