// Crie um código que receba um número por prompt e verifique se um número é divisível por 2 ou por 3
const num = Number(prompt("Insira um numero"))
// Faça isso:
// Utilizando ifs aninhados
if (num % 2 === 0) {
    console.log("o numero é divisivel por 2");
} else { 
    if (num % 3 === 0) {
        console.log("o numero é divisivel por 3");
    } else {
        console.log("o numero nao é divisivel por 2 nem por 3");
    }
}

// Utilizando um operador lógico para unir duas operações relacionais
if (num % 2 === 0 || num % 3 === 0) {
    console.log("o numero é divisivel por 2 ou por 3")
} else {
    console.log("o numero nao é divisivel por 2 nem por 3");
}