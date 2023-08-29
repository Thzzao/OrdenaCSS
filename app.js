import readline from 'readline';

var rl = readline.createInterface(process.stdin, process.stdout);

console.log("Digite pelo menos 3 propriedades do CSS. Para ordenar digite 'SAIR'")

rl.question('Digite a propriedade:', (prop) => {
    if (prop = 'SAIR') {
        rl.close();
        prop.sort();
        console.log(prop);
    }
})
