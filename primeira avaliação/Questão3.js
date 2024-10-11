// questão 3

function gerenciarTarefas() {
    let tarefas = [];

    for (let i = 1; i <= 5; i++) {
        let tarefa = prompt(Digite_a_tarefa {i} );
        tarefas.push(tarefa);
    }

    alert("Suas tarefas: \n" + tarefas.join("\n"));
    let tarefaConcluida = prompt("Digite a tarefa que você deseja marcar como concluída:");

    let index = tarefas.indexOf(tarefaConcluida);
    if (index !== -1) {
        tarefas.splice(index, 1);
    } else {
        alert("Tarefa não encontrada.");
    }

    alert("Lista de tarefas atualizada: \n" + tarefas.join("\n"));
}

gerenciarTarefas();
