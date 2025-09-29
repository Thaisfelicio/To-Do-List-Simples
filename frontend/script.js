
function criarTarefa() {
    let valorInput = document.querySelector("input").value;

    let tarefa = document.createElement("li");
    let iconeDeletarTarefa = document.createElement("span");
    iconeDeletarTarefa.classList.add("deletar-tarefa");
    tarefa.innerHTML = valorInput + iconeDeletarTarefa;

    document.querySelector("ul").appendChild(tarefa);

    valorInput = "";
}

function adicionarTarefa() {
    
}