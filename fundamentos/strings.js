const escola = "Cod3r"

// charAt retorna o caractere na posição. Strings são arrays

console.log(escola.charAt(4))
console.log(escola.charAt(5))

// charCodeAt é o valor na tabela unicode/ascii

console.log(escola.charCodeAt(3))
console.log(escola.charCodeAt(4))

// retorna o índice onde se encontra o caractere. No caso no c, é escola[0]
console.log(escola.indexOf('C'))

// a substring permite que se comece a impressão a partir de um indice, neste caso o 1

console.log(escola.substring(1))

// também se pode limitar o inicio e o fim da impressao. A sintaxe é:
// substring(indice inicial, indice final - 1)
// pode-se ler "Comece do indice tal e me dê tantos caracteres"
console.log(escola.substring(0,4))

// o concat pode ser chamado da forma que se quiser
// basicamente uma parte da string se conecta a outra com outro concat,
// que pode se conectar a outro, e a outro
// o concat não faz distinção de valor literal e constantes/variaveis 
console.log('Escola '.concat(escola).concat("!"))
console.log("Escola " + escola + "!") //Forma alternativa de concatenação
console.log("Socorro, ".concat('Jesus').concat(`, me ajuda!`))

// o replace busca um caractere e o susbtitui pelo indicado
// A sintaxe é: replace(substituir este, por este)
console.log(escola.replace(3, 'e'))

// Se pode utilizar regex com estas funções de String

// Converter uma string em array, utilizando como base um separador. Neste caso, a vírgula.
// A sintaxe é: split('separador')
// A função spli também aceita o uso de regex para identificar o separador
console.log('Ana, Maria, José'.split(','))
