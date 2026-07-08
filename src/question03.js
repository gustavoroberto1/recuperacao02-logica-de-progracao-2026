import leia from "readline-sync";

var valorProdutos = leia.questionFloat("Digite o valor total dos produtos: ");

console.log("\n1 - Dinheiro/Pix");
console.log("2 - Cartao de debito");
console.log("3 - Cartao de credito a vista");
console.log("4 - Cartao de credito parcelado");

var formaPagamento = leia.questionInt("Escolha a forma de pagamento: ");

var desconto = 0;
var acrescimo = 0;
var parcelas = 1;
var valorFinal = valorProdutos;

if (formaPagamento === 1) {
  desconto = valorProdutos * 0.12;
  valorFinal = valorProdutos - desconto;
} else if (formaPagamento === 2) {
  desconto = valorProdutos * 0.07;
  valorFinal = valorProdutos - desconto;
} else if (formaPagamento === 3) {
  desconto = valorProdutos * 0.03;
  valorFinal = valorProdutos - desconto;
} else if (formaPagamento === 4) {
  parcelas = leia.questionInt("Digite a quantidade de parcelas: ");

  if (parcelas > 6) {
    acrescimo = valorProdutos * 0.08;
    valorFinal = valorProdutos + acrescimo;
  }
} else {
  console.log("Forma de pagamento invalida.");
}

if (formaPagamento >= 1 && formaPagamento <= 4) {
  console.log("\n--- RESUMO DA COMPRA ---");
  console.log("Valor original: R$ " + valorProdutos.toFixed(2));
  console.log("Desconto: R$ " + desconto.toFixed(2));
  console.log("Acrescimo: R$ " + acrescimo.toFixed(2));
  console.log("Valor final: R$ " + valorFinal.toFixed(2));

  if (formaPagamento === 4) {
    var valorParcela = valorFinal / parcelas;

    console.log("Quantidade de parcelas: " + parcelas);
    console.log("Valor de cada parcela: R$ " + valorParcela.toFixed(2));
  }
}