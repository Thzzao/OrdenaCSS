// Importando o módulo readline-sync
import * as rl from 'readline-sync';

//Instrução
console.log("Digite pelo menos 3 propriedades do CSS. Para ordenar digite 'SAIR'")

//Criação do array e da variável
const props = []
let input

//Entrada do usuário e tratamento de erros
do {
    input = (rl.question('Digite a propriedade: ')).toUpperCase();
    //Guarda a entrada do usuário na lista
    props.push(input);
    /*
    if (input == " ") {

    }
    else if (input == number) {

    }*/
} while (input != 'SAIR');

// Remove o último item da lista (a palavra 'sair')
props.pop()
// Ordena as palavras em ordem alfabética crescente 
props.sort()
// Imprime os elementos em forma de lista
props.forEach(function (element) {
    console.log(element)
})
