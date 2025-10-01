const urlBase = "http://localhost:3000/tarefas";

function criarTarefa(tarefaCriada) {
    //verifica se o input está vazio
    if(!tarefaCriada.titulo.trim()) return;

    let tarefa = document.createElement("li");
    tarefa.dataset.id = tarefaCriada.id;

    //span para o titulo da tarefa
    let textoTarefa = document.createElement("span");
    textoTarefa.classList.add("texto-tarefa");
    textoTarefa.textContent = tarefaCriada.titulo;
    // checkbox para marcar a tarefa como concluida
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
   
    if(tarefaCriada.concluida == true) {
        checkbox.checked = true;
    }

    checkbox.addEventListener("change", ()=> marcarConcluidaTarefa(tarefa, checkbox));

    // icone de deletar tarefa
    let iconeDeletarTarefa = document.createElement("span");
    iconeDeletarTarefa.textContent = "❌";
    iconeDeletarTarefa.classList.add("deletar-tarefa");

    iconeDeletarTarefa.addEventListener("click", ()=> deletarTarefa(tarefa));

    tarefa.appendChild(checkbox);
    tarefa.appendChild(textoTarefa);
    tarefa.appendChild(iconeDeletarTarefa);

    document.querySelector("ul").appendChild(tarefa);

    valorInput = "";
}

async function adicionarTarefa() {
    let valorInput = document.querySelector("input").value;

    const response = await fetch(urlBase, {
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
        let response = await fetch(`${urlBase}/${id}`, {
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

async function marcarConcluidaTarefa(tarefa, checkbox) {
    let id = tarefa.dataset.id;

    try {
        let response = await fetch(`${urlBase}/${id}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({ concluida: checkbox.checked ? 1 : 0 })
        });
        
    }
    catch(error) {
        console.error("Erro de conexão: ", error);
    }
}

async function listarTarefas() {
    try {
        const response = await fetch(urlBase, {
            method: "GET",
            headers: {
            "Content-Type": "application/json"
            },
        });

        if(!response.ok) {
            console.error("Erro na requisição: ", response.status, await response.text());
            return;
        }
        const tarefas = await response.json();


        tarefas.forEach(tarefa => {
            criarTarefa(tarefa);
            console.log(tarefa)
        });
    }
    catch(error) {
        console.error("Erro ao listar tarefas");
    }
}

listarTarefas();