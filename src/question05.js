import leia from "readline-sync";

var vitorias = leia.questionInt("Quantidade de vitorias: ");
var derrotas = leia.questionInt("Quantidade de derrotas: ");
var empates = leia.questionInt("Quantidade de empates: ");
var pontosBonus = leia.questionInt("Quantidade de pontos de bonus: ");

var totalPartidas = vitorias + derrotas + empates;
var pontuacao = vitorias * 3 + empates + pontosBonus;
var classificacao = "";

if (pontuacao < 10) {
  classificacao = "Iniciante";
} else if (pontuacao <= 24) {
  classificacao = "Competidor";
} else if (pontuacao <= 39) {
  classificacao = "Avancado";
} else if (pontuacao <= 59) {
  classificacao = "Elite";
} else {
  classificacao = "Lenda da competicao";
}

console.log("\n--- RESULTADO DO JOGADOR ---");
console.log("Total de partidas: " + totalPartidas);
console.log("Pontuacao final: " + pontuacao);
console.log("Classificacao: " + classificacao);


