// 1. Declare uma variável de nome weight
let weight
    // 2. Que tipo de dado é a variável acima
console.log(typeof weight)
    /* 3. Declare uma variável e atribua valores para cada um dos dados:
    *Name: String
    *age: Number(integer)
    *stars: Number (float)
    *IsSubscribed: Boolean

    */
let name = "Nicolas"
let age = 14
let stars = 94.6
let IsSubscribed = true

/* 4. A variável student abaixo é de que tipo de dados

4.1 atribua a elas as mesmas propriedades e valores do exercicio 3.

4.2 Mostre no console a seguinte mensagem <name> de idade <age> pesa <weight> kg.

*/
const student = {
    name: "Nicolas",
    age: 14,
    stars: 94.6,
    IsSubscribed: true
}
console.log(`${student.name} de idade ${student.age} pesa ${student.stars}`)
    /* 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja somente o Array vazio
     */
let students = []
    /* 6. Reatribua valor para variável acima, colocando dentro dela o objeto students da questão 4.
    (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

    */
students = [
        student
    ]
    /* 7. Coloque no console o valor da posição zero do Array acima
     */
console.log(students[0])

/* 8. Crie um novo student e coloque na posição 1 do Array students
 */
const student2 = {
    name: "Hamilton",
    age: 54,
    weight: 97.8,
    IsSubscribed: true
}
students = [
    student,
    student2
]
console.log(students[1])
    /* 9. Sem rodar o codigo responda qual a resposta do codigo abaixo e por que, Após sua resposta rode e o codigo e veja se acertou.
     */
console.log(a)
var a = 1