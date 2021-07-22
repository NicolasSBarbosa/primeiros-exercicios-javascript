/* Nomes simbólicos para receber algum valor
 *Atalhos de código
 *Identificadores
 *3 palavras reservadas parar cria uma variável
 *var
 *let
 *const */

//let Pode reatribuir o valor na variavel

let clima = "Quente"
clima = "frio"

console.log(clima)

//const O valor da variavel não pode ser redefinido

const clima2 = "Quente"

console.log(clima2)





//SCOPE VAR
console.log('> existe x antes do bloco? ', x) //existe, mas o valor é undefined
    {
        var x = 0
    }

console.log('> existe x depois do bloco? ', x) //existe e o valor é 0



// SCOPE LET 
console.log('> existe y antes do bloco? ', y) //não existe no escopo global, só no escopo local
    {
        let y = 0
    }


{
    console.log('> existe w antes? ', w)
    let w = 0
        //sabe que existe, mas não pode acessar 'w' antes da inicialização. Só vai funcionar depois que eu declarei e adicionei um valor a ele.
}


let z = 1; {
    z = 0
    console.log("existe z?", z) //0
}
console.log("existe z depois do bloco? ", z) //0


//SCOPE CONST

const c = 1; {
    const c = 0;
    console.log("existe c?", c); //0
}
console.log("existe c depois do bloco? ", c); //1


const d = 1; {
    d = 0;
    console.log("existe d?", d);
}
console.log("existe d depois do bloco? ", d);



// Variáveis e tipos de dados
// declaração or declaration
var name

//assigments ou atribuição de valores
name = "Nicolas"

// que tipo de dado foi colocado na varialvel

console.log(typeof name)

// agrupamento de declarações
let age, isHuman

age = 18
isHuman = true

console.log(name, age, isHuman)

// conectando os valores
console.log('o ' + name + ' tem' + age + 'anos')

//template literals
console.log(`o ${name} tem ${age} anos`)