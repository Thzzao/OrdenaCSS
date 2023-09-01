// Importando o módulo readline-sync
import * as rl from 'readline-sync';

//Instrução
console.log("Digite pelo menos 2 propriedades do CSS.\nPara ordenar digite 'sair'\n")

//Criação do array e da variável
const props = []
let input

//Entrada do usuário e validação
do {
    input = (rl.question('Digite a propriedade: ')).toLowerCase()
    let isValid = validaNumero(input) & validaString(input)
    //Só guarda a entrada do usuário na lista se validar uma string e se não for número
    if (isValid) {
        props.push(input)
    } else {
        console.log("Entrada inválida")
    }

} while (input != 'sair')


// Remove o último item da lista (a palavra 'sair')
props.pop()
// Ordena as palavras em ordem alfabética crescente 
props.sort()
// Imprime os elementos em forma de lista
console.log("\nLISTA DOS ELEMENTOS ORDENADOS:")
props.forEach(function (element) {
    console.log(element)
})


// Criação da função de validar se não for número
function validaNumero(input) {
    const inputInt = parseInt(input)
    return isNaN(input)
}

// Criação da função de validar se não for um espaço vazio 
function validaString(input) {
    const str = input.trim()
    return str != ''
}
