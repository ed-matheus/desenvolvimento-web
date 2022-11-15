/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de Pagamento:
- À vista Débito, recebe 10% de Desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

function calcDescontoJuros(valor, desconto) {
    return valor * (desconto/100);
}

function calcValorFinal(valorProduto, valorDesconto) {
    return valorProduto - valorDesconto;
}

const pagamento = '3 parcelas ou mais';

if (pagamento == 'débito') {
    const valorDesconto = calcDescontoJuros(125, 10);
    const valorFinal = calcValorFinal(125, valorDesconto);
    console.log('DÉBITO | DESCONTO 10%');
    console.log('\nValor a ser pago = R$' + valorFinal.toFixed(2));

} else if (pagamento == 'dinheiro ou pix') {
    const valorDesconto = calcDescontoJuros(125, 15);
    const valorFinal = calcValorFinal(125, valorDesconto);
    console.log('DINHEIRO OU PIX | DESCONTO 15%');
    console.log('\nValor a ser pago = R$' + valorFinal.toFixed(2)); 

} else if (pagamento == '2 parcelas') {
    const valorFinal = calcValorFinal(125, 0);
    console.log('2 PARCELAS | VALOR NORMAL SEM DESCONTO OU JUROS');
    console.log('\nValor a ser pago = R$' + valorFinal + '.00');

} else if (pagamento == '3 parcelas ou mais') {

    function calcValorFinal(valorProduto, valorJuros) {
        return valorProduto + valorJuros;
    }

    const valorJuros = calcDescontoJuros(125, 10);
    const valorFinal = calcValorFinal(125, valorJuros);
    console.log('3 PARCELAS OU MAIS | VALOR NORMAL + 10% JUROS');
    console.log('\nValor a ser pago = R$' + valorFinal.toFixed(2));
}
