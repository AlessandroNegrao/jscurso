const nome = "Rebeca"
//concatenação básica com string
const concatenacao = "Olá " + nome + '!'

// concatenação com template string. Deste modo não há reconhecimento de erros por parte 
// do interpretador ao usar espaços e quebras de linha. A template string reconhece 
// os mesmos, além de permitir o uso de expressões, funções e tags. Isso tudo linearmente.

const template = `
    Olá
    $ {nome}!`
console.log(concatenacao, template)

// expressoes
// aqui temos que a expressão precisa estar indicada com o $ e delimitada
// por {}
// o básicos de uma template string é o uso do acento grave `
// A sintaxe é:
// `texto qualquer ${expressao qualquer/função} texto qualquer`
console.log(`1 + 1 =  ${1 + 1}`)    

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('aburai')}!`)