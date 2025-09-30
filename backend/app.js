import { initDb, openDb } from "./db.js";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import tarefaRoutes from "./src/routes/tarefaRoutes.js";

const app = express();
const port = 3000;
//recria __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//inicializar o banco de dados e criar tabela
initDb().then(() => {
    console.log("banco inicializado");
})

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));
//rotas da api
app.use("/tarefas", tarefaRoutes);

app.get("/home", (req, res) => {
    return res.render("../frontend/index")
});

app.listen(port, ()=> 
console.log(`Servidor rodando na porta ${port}`))