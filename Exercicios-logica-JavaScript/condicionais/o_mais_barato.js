/*
    Fácil 8 - Faça um programa que pergunte o preço de três produtos 
    e informe qual produto você deve comprar, sabendo que a decisão é sempre o mais barato.  
*/

const preco1 = 126.20;
const preco2 = 99.50;
const preco3 = 248.70;

if (preco1 < preco2 && preco1 < preco3) {
    console.log('Compre este produto, custa R$'+ preco1.toFixed(2) +'!');

} else if (preco2 < preco1 && preco2 < preco3) {
    console.log('Compre este produto, custa R$' + preco2.toFixed(2) +'!');

} else if (preco3 < preco1 && preco3 < preco2) {
    console.log('Compre este produto, custa R$' + preco3.toFixed(2) +'!');
}
