// import framework
const express = require("express");

//cria a aplicaçao express
const app = express();

//define a porta
const PORT = 3000;

//ROTA 
app.get("/hello", (req, res) => {
    res.json({
        message: "Ola, Mundo"
    });
});

app.use((req, res) => {
    res.status(404).json({
        error: "Rota nao encontrada"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em
        http://localhost:${PORT}`);
});