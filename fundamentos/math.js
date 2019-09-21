// O JS não tem um operador para exponenciação, mas se pode usar o Math, que possui
// funções prontas para este uso. Mas Math é um objeto, provavelmente uma classe

const raio = 5.6

// Math.PI trás o valor de pi 
// Math.pow é o medidor de potência, exponenciação. Possui a sintaxe:
// Math.pow(base, expoente)

const area = Math.PI * Math.pow(raio, 2)

console.log(area)

console.log(area.toFixed(2))
console.log(typeof Math)