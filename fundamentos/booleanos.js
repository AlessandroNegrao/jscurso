let isAtivo = false

console.log(isAtivo)
console.log(typeof isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1

console.log(isAtivo)
console.log(typeof isAtivo)
console.log('\n')
console.log(!!isAtivo)
console.log(typeof isAtivo)
console.log('\n')
console.log(!!isAtivo)
console.log(typeof !!isAtivo)

console.log('Os verdadeiros são:')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))