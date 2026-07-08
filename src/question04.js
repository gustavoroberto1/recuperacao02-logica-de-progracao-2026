import leia from "readline-sync";

var salarioBase = leia.questionFloat("Digite o salario base: ");
var horasExtras = leia.questionInt("Digite a quantidade de horas extras: ");
var faltas = leia.questionInt("Digite a quantidade de faltas: ");

var valorHorasExtras = horasExtras * 35;
var descontoFaltas = faltas * 90;
var bonus = 0;

if (horasExtras > 20) {
  bonus = 250;
}

var salarioFinal = salarioBase + valorHorasExtras + bonus - descontoFaltas;

console.log("\n--- HOLERITE ---");
console.log("Salario base: R$ " + salarioBase.toFixed(2));
console.log("Valor das horas extras: R$ " + valorHorasExtras.toFixed(2));
console.log("Bonus: R$ " + bonus.toFixed(2));
console.log("Desconto por faltas: R$ " + descontoFaltas.toFixed(2));
console.log("Salario final: R$ " + salarioFinal.toFixed(2));

if (faltas > 3) {
  console.log("Atencao: funcionario sujeito a advertencia.");
}
