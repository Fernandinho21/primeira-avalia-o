// questão 7

let produtos = [
    { nome: "Produto 1", preco: 15.0, quantidade: 5 },
    { nome: "Produto 2", preco: 25.0, quantidade: 3 },
    { nome: "Produto 3", preco: 30.0, quantidade: 2 }
];
function calcularValorTotalEstoque(produtos) {
    let valorTotal = 0;

    for (let i = 0; i < produtos.length; i++) {
        valorTotal += produtos[i].preco * produtos[i].quantidade;
    }

    return valorTotal;
}

let valorTotalEstoque = calcularValorTotalEstoque(produtos);
console.log("Valor total do estoque: R$" + valorTotalEstoque.toFixed(2));