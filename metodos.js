// Manipulando Strings e Arrays


// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto, e onde eram espaços coloque _

let phare = "Eu quero viver o Amor!"
let myArray = phare.split(" ")
console.log(myArray)
let phareWithUnderscore = myArray.join("_")
console.log(phareWithUnderscore)


// Verificar se o texto contém a palavra Amor

let phrase = "Eu quero viver o Amor"
console.log(phare.includes("Amor"))


// Contar elementos de um array
console.log(["a", "b", "c"].length)

// Manipulando Arrays
let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
    // adicionar no começo
techs.unshift("sql")
    // remover do fim
techs.pop()
    // remover do começo
techs.unshift()
    // pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
    // remover 1 ou mais items da posição do array
techs.splice(1, 2)
    // encotnrar a posição de um elemento no array
let index = techs.indexOf('html')

console.log(techs)