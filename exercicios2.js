/* ### Transforma notas escolares

Crie um algoritmo que transforme a nota do sistema númerico para sistema de notas em caracteres tipo A B C 
* de 90 pra cima - A
* entre 80 e 89 - B
* entre 70 a 79 - C
* entre 60 a 69 - D
* menor que 60 - F
*/

function boletim(nota) {
    if (nota >= 90) {
        return console.log('A')
    } else if (nota >= 80 && nota <= 89) {
        return console.log('B')
    } else if (nota >= 70 && nota <= 79) {
        return console.log('C')
    } else if (nota >= 60 && nota <= 69) {
        return console.log('D')
    } else {
        return console.log('F')
    }
}

boletim(80)




/* ### sistema de gastor familiar
Crie um objeto que pussuirá 2 propriedades, ambas do tipo array:
    *receitas: []
    *despesas: []

Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo 
positivo ou negativo, seguindo o valor do saldo

*/

let gestao = {
    receitas: [1000.10, 800.80],
    despesas: [230.55, 89.90, 300.20]
}

function sum(array) {
    let total = 0

    for (let value of array) {
        total += value
    }

    return total
}

function saldo() {
    const calculateReceitas = sum(gestao.receitas)
    const calculateDespesas = sum(gestao.despesas)
    const total = calculateReceitas - calculateDespesas
    if (total > 0) {

        return console.log(`a familia está com saldo postivo de ${total}`)
    } else {
        return console.log(`a familia está com saldo negativo de ${total}`)
    }
}
saldo()