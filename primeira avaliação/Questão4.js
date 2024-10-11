// questão 4

let aluno = {
    nome: "fernando",
    notas: [7, 8.5, 10],
    media: function() {
        let soma = 0;

        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }
};

alert("O aluno " + aluno.nome + " tem a média: " + aluno.media().toFixed(2));

