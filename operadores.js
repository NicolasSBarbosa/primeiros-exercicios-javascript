// Operadores Aritiméticos

// multiplicação *
console.log(34 * 37)

//divisão /
console.log(83 / 4)

//soma +
console.log(48 + 36)

//subtração -
console.log(46 - 38)

// resto da divisão %
let remainder
remainder = 11 % 9
console.log(remainder)

// incremento ++
let increment = 0
console.log(++increment)
console.log(increment)

// decremento --
let decrement = 0
decrement--
console.log(drecrement)

// exponencial **
console.log(2 ** 3)

// Grouping numbers ()

let total = (2 + 3) * 5
console.log(total)

// Operadores de comparação

// Irá comparar valores e retorna a Boolean como resposta a comparação

let one = 1
let two = 2

// ==   igual a
console.log(two == 1)
console.log(one == "1")

//  !=  diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

// === estritamente igual a
console.log(one === "1")
console.log(one === 1)

// !== estritamente diferente de 
console.log(two !== "2")
console.log(two !== 2)

// >    maior que
console.log(one > two)

// >=   maior que a
console.log(one >= 1)
console.log(two >= 1)

// <    menor que
console.log(one < two)

// <=   menor igual a
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)

// Operadores lógicos (logical operators)

// -2 valores booleanos, quando verificamos, resúltara em verdadeiro ou falso


let pao = true
let queijo = false

// AND = &&
console.log(pao && queijo)

// OR = ||
console.log(pao || queijo)

// NOT = !
console.log(!pao)

// Operador Condicional (Tenário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)