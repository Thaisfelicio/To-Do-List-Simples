import { Router } from "express";
import { listarTarefas, criarTarefa, marcarConcluidaTarefa, removerTarefa } from "../controllers/tarefaController.js";

const router = Router();

router.get("/", listarTarefas); // GET/tarefas
router.post("/", criarTarefa);  // POST/tarefas
router.patch("/:id", marcarConcluidaTarefa); //PATCH/tarefas/:id
router.delete("/:id", removerTarefa); //DELETE/tarefas/:id

export default router;