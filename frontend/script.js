
function criarTarefa(tarefaCriada) {
    //verifica se o input está vazio
    if(!tarefaCriada.titulo.trim()) return;

    let tarefa = document.createElement("li");
    tarefa.dataset.id = tarefaCriada.id;

    let texto = document.createTextNode(tarefaCriada.titulo);
    let iconeDeletarTarefa = document.createElement("span");
    iconeDeletarTarefa.textContent = "❌";
    iconeDeletarTarefa.classList.add("deletar-tarefa");

    iconeDeletarTarefa.addEventListener("click", ()=> deletarTarefa(tarefa));
    
    tarefa.appendChild(texto);
    tarefa.appendChild(iconeDeletarTarefa);

    document.querySelector("ul").appendChild(tarefa);

    valorInput = "";
}

async function adicionarTarefa() {
    let valorInput = document.querySelector("input").value;

    const response = await fetch("http://localhost:3000/tarefas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ titulo: valorInput })
    });

    const novaTarefa = await response.json();

    criarTarefa(novaTarefa);
}

async function deletarTarefa(tarefa) {
    let id = tarefa.dataset.id;

    try {
        let response = await fetch(`http://localhost:3000/tarefas/${id}`, {
            method: "DELETE"
        });

        if(response.ok) {
            tarefa.remove(); // remove a tarefa do front somente se for removido do banco de dados
        }
        else {
            console.error("Erro ao deletar no backend.");
        }
    }
    catch(error) {
        console.error("Erro de conexão: ", error);
    }
}