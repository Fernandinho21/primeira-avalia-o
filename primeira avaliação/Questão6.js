// questão 6

let pessoas = [];

for (let i = 1; i <= 5; i++) {
    let nome = prompt(Digite o nome da pessoa ${i}:);
    let idade = parseInt(prompt(Digite a idade da pessoa ${i}:), 10);

    pessoas.push({ nome: nome, idade: idade });
}
function exibirMaioresDeIdade(pessoas) {
    console.log("Pessoas com mais de 18 anos:");
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade > 18) {
            console.log(pessoas[i].nome);
        }
    }
}

exibirMaioresDeIdade(pessoas);
