const peso1 = 1.0

// abaixo Number atua como uma função

const peso2 = Number('2.0')

console.log(1,2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.879
const avaliacao2 = 6.874

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// a função isFixed permitge definir o número de casas decimais

console.log(media)
console.log(media.toFixed(2))
console.log(Number.isInteger(media))

// o método toString converte o number em String

console.log(media.toString())
console.log(Number.isInteger(media.toString))

// converte o resultado em binário

console.log(media.toString(2))

// mostra o tipo de dado da constante/variavel
console.log(typeof media)
console.log(typeof Number)