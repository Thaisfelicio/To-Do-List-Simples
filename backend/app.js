const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/home", (req, res) => {
    return res.render("../frontend/index")
});

app.listen(port, ()=> 
console.log(`Servidor rodando na porta ${port}`))