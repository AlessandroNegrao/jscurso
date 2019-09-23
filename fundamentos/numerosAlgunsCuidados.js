// retorna o tipo infinity
console.log(7/0)

// o js permite dividir, multiplicar e subtrair strings se só tiver numeros na mesma
console.log("10"/ 5)
console.log("2" * 2)
console.log("2" - 1)

// Somas não são executas em string porque o + é operador de concatenação
// A concatenação tem prioridade.

console.log("2" + 1)


// O js não permite que se faça esta operação
console.log("Show!" * 2);

// algumas operações com pontos flutuantes podem não render resultados precisos
// isso porque é parte de uma especificação da IEEE 

console.log(0.1 + 0.7)

// Chamar um numero literal nao permite que se execute funções
//console.log(10.toString)
// Mas se pode se colocar o numero dentro de parenteses, ou usando uma variavel
// e o atribuindo a ela

console.log((10).toString)

var a = 10
console.log(a.toString)