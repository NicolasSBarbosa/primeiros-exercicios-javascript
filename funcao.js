// criar um aplicativo de frases motivacionais

// declaration - declaração da função
// function statement
function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é a mãe do aprendizado')
}

// executar a função
// rodar, chamar, invocar
// execute, call, invoke, run
createPhrases()
createPhrases()
createPhrases()

console.log('fim do programa')


// function expression
// function anonymous

//parâmetros (parameters)
const sum = function(number1, number2, number3) {
    let total = number1 + number2 + number3
    return total
}

// sum(2, 3, 4) 

let number1 = 34
let number2 = 25
let number3 = 67

console.log(`a soma é ${sum(number1,  number2, number3)}`)



// function andar(passos) {
//     return `o personagem andou ${passos} passos`
// }
const frase = andar(4)
console.log(frase)


const andar = passos => (
    `o personagem andou ${passos} passos`
)


/* Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/
function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + "está andando"
    }
}
const nicolas = new Person("Nicolas")
const roberto = new Person("Roberto")
console.log(nicolas.walk())
console.log(roberto.walk())