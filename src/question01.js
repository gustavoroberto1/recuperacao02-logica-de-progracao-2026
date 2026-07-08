import leia from "readline-sync";

var dias = leia.questionInt("Quantidade de dias alugados: ");
var quilometros = leia.questionFloat("Quantidade de quilometros percorridos: ");
var tipoCarro = leia.question(
  "Tipo do carro (popular, intermediario ou luxo): "
);

var valorDiaria = 0;
var valorKm = 0;

if (tipoCarro === "popular") {
  valorDiaria = 90;
  valorKm = 0.25;
} else if (tipoCarro === "intermediario") {
  valorDiaria = 140;
  valorKm = 0.4;
} else if (tipoCarro === "luxo") {
  valorDiaria = 220;
  valorKm = 0.7;
} else {
  console.log("Tipo de carro invalido.");
}

if (valorDiaria > 0) {
  var valorDiarias = dias * valorDiaria;
  var valorQuilometragem = quilometros * valorKm;
  var valorTotal = valorDiarias + valorQuilometragem;
  var desconto = 0;

  if (dias > 7) {
    desconto = valorTotal * 0.1;
  }

  var valorFinal = valorTotal - desconto;

  console.log("\n--- RESUMO DO ALUGUEL ---");
  console.log("Valor das diarias: R$ " + valorDiarias.toFixed(2));
  console.log("Valor da quilometragem: R$ " + valorQuilometragem.toFixed(2));
  console.log("Desconto: R$ " + desconto.toFixed(2));
  console.log("Valor final: R$ " + valorFinal.toFixed(2));
}