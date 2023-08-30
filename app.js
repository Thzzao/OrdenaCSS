import * as rl from 'readline-sync';

console.log("Digite pelo menos 3 propriedades do CSS. Para ordenar digite 'SAIR'")

const props = []

let input

do {
    input = (rl.question('Digite a propriedade: ')).toUpperCase();
    props.push(input);

} while (input != 'SAIR');

props.pop()
props.sort()
console.log(props)
