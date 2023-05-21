/*
Um restaurante está buscando otimizar a entrega dos pedidos, e para isso precisa de um programa que encontre o pedido mais próximo a partir de uma lista de pedidos. O programa deve exibir o nome e o tipo de comida do pedido mais próximo.

Seu desafio é criar um código em JavaScript que manipule um array com três objetos JSON, contendo as informações de cada pedido (nome, tipo e distância).
*/

const pedidos = [
    { 
        nome: 'Rafael', 
        tipo: 'Massa', 
        distancia: parseFloat(3.5)
    },
    { 
        nome: 'Julia', 
        tipo: 'Arabe', 
        distancia: parseFloat(4.2)
    },
    { 
        nome: 'Carla', 
        tipo: 'Hamburguer', 
        distancia: parseFloat(2.0)
    }
];

  //TODO: Usando o array acima identifique o pedido mais próximo (menor distância).
  //Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
  //Referência: https://stackoverflow.com/a/34087850/3072570
const pedido = pedidos.reduce((n, valor) => {
    return (valor.distancia < n.distancia) ? valor : n;
});

//TODO: Imprima a saída de acordo com o enunciado deste desafio.
console.log(`O pedido mais próximo é o de ${pedido.nome}, do tipo ${pedido.tipo}`)