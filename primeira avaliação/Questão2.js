// questão 2

function verificaPalindromo() {
    let palavra = prompt("Digite uma palavra: ").toLowerCase();
    let palavraInvertida = '';
    
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }
    
    if (palavra === palavraInvertida) {
        return "A palavra é um palíndromo.";
    } else {
        return "A palavra não é um palíndromo.";
    }
}

alert(verificaPalindromo());
