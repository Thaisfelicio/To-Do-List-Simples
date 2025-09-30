import { openDb } from "../../db.js";
import { Tarefa } from "../models/tarefaModel.js";

export async function getAllTarefas() {
    const db = await openDb();
    const linhas = await db.all("SELECT * FROM tarefa");
    return linhas.map(linha => new Tarefa(linha.id, linha.titulo, Boolean(linha.concluida)));
}

export async function addTarefa(titulo) {
    const db = await openDb();
    const tarefa = await db.run("INSERT INTO tarefa (titulo, concluida) VALUES (?, ?)", [titulo, 0]);
    return new Tarefa(tarefa.lastID, titulo, false);
}

export async function concluirTarefa(id, concluida) {
    const db = await openDb();
    await db.run("UPDATE tarefa SET concluida = ? WHERE id = ?", [concluida ? 1 : 0, id]);
}

export async function deletarTarefa(id) {
    const db = await openDb();
    await db.run("DELETE FROM tarefa WHERE id = ?", [id]);
}