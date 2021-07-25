// if...else

let temperature = 36.9

if (temperature >= 37.5) {
    console.log('Febre alta')
} else if (temperature < 37.5 && temperature >= 37) {
    console.log('Febre modererada')
} else {
    console.log('Saudável')
}

// switch


let expression = 'a'

switch (expression) {
    case 'a':
        //codigo
        console.log('a')
        break
    case 'b':
        //codigo para expression b
        console.log('b')
        break
    default:
        console.log('default')
        break
}


function calculate(number1, operator, number2) {
    let result
    switch (operator) {
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break;
        case '*':
            result = number1 * number2
            break;
        case '/':
            result = number1 / number2
            break;
        default:
            console.log('Não implementado')
            break;
    }
    return result
}
console.log(calculate(8, '/', 2))


// throw

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }
    console.log(name)
}

// try...catch
try {
    sayMyName('Nicolas')
} catch (e) {
    console.log(e)
}
console.log('após ao try/catch')