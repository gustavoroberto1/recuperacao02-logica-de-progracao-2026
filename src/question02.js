import leia from "readline-sync";

var nota1 = leia.questionFloat("Digite a nota do primeiro bimestre: ");
var nota2 = leia.questionFloat("Digite a nota do segundo bimestre: ");
var faltas = leia.questionInt("Digite a quantidade de faltas: ");
var totalAulas = leia.questionInt("Digite a quantidade total de aulas: ");

var media = (nota1 + nota2) / 2;
var aulasFrequentadas = totalAulas - faltas;
var presenca = (aulasFrequentadas / totalAulas) * 100;
var situacao = "";

if (presenca < 75) {
  situacao = "Reprovado por falta";
} else if (media >= 7) {
  situacao = "Aprovado";
} else if (media >= 5) {
  situacao = "Recuperacao";
} else {
  situacao = "Reprovado por nota";
}

console.log("\n--- RESULTADO FINAL ---");
console.log("Media: " + media.toFixed(2));
console.log("Presenca: " + presenca.toFixed(2) + "%");
console.log("Situacao: " + situacao);