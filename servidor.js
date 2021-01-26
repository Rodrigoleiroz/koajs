const http = require("http");
const express = require("express");
const app = express();
let nomesaleatorios = ['rodrigo', 'joao', 'pedro', 'lucas', 'marcos', 'antonio', 'cleber', 'eliel', 'selma', 'luisa', 'gabriel', 'bruno', 'matheus', 'madara']

app.get("/", function(req, res) {
    res.send({ working: true });
});

app.get("/nomesaleatorios", function(req, res) {
    letraescolhida = "l"
    const filtronomeletra = nomesaleatorios.filter(function(nome) {
        return nome[0] == letraescolhida
    })
    tamanho = filtronomeletra.length
    numal = Math.floor(Math.random() * tamanho)
    nome = filtronomeletra[numal]
    res.send({ "nome": nome, numal, tamanho });
});

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));