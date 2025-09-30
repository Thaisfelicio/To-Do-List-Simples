import * as repo from "../repositories/tarefaRepository.js";

export const listarTarefas = async (req, res) => {
    const tarefas = await repo.getAllTarefas();
    res.json(tarefas);
}

export const criarTarefa = async (req, res) => {
    const { titulo } = req.body;
    const tarefa = await repo.addTarefa(titulo);
    res.status(201).json(tarefa);
}

export const marcarConcluidaTarefa = async (req, res) => {
    const { id } = req.params;
    const { concluida } = req.body;
    await repo.concluirTarefa(id, concluida);
    res.json({ message: "Tarefa concluída" });
}

export const removerTarefa = async (req, res) => {
    const { id } = req.params;
    await repo.deletarTarefa(id);
    res.json({ message: "Tarefa removida" });
}