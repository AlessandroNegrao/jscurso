//a linguagem interpreta a variavel a e faz o hoisting da mesma, ou seja
//o içamento. Acontece apenas com o "var". Ela sobre como se o código fosse:

/*
var a
console.log('a = ', a)
a = 2
console.log('a = ', a)
*/

console.log('a = ', a)
var a = 2
console.log('a = ', a)