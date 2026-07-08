var numero = 56;
var binario = "";
var resto;

while (numero > 0) {
    resto = numero % 2;
    binario = resto + binario;
    numero = Math.floor(numero / 2)
}

console.log(binario)
