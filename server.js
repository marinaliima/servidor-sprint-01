import express from "express";

const app = express();
const porta = 3000;

const status = { "Código": 200, "Mensagem": "Servidor Node.js com Express funcionando!" };

const escola = [
 {
  "Nome": "SENAI",
  "Cidade": "São Paulo",
  "Tipo": "Ensino Técnico"
 },
 {
    "Nome": "SESI",
    "Cidade": "Valinhos",
    "Tipo": "Ensino Médio"
 },
 {
    "Nome": "Unicamp",
    "Cidade": "Campinas",
    "Tipo": "Ensino Superior"
 }
];

const cursos = [
 {
    "ID": 1,
    "Nome": "Desenvolvimento de Sistemas"
 },
 {
    "ID": 2,
    "Nome": "Redes de Computadores"
 },
 {
    "ID": 3,
    "Nome": "Administração"
 }
];

const professor = [
 {
    "Nome": "Julia",
    "Disciplina": "Back-End I"
 },
 {
    "Nome": "Gabriel",
    "Disciplina": "Linguagem de Marcação"
 },
 {
    "Nome": "Ana",
    "Disciplina": "Banco de Dados"
 },
 {
    "Nome": "Guilherme",
    "Disciplina": "Projetos de Software I"
 }
];

app.get("/", (req, res) => {
    res.send("Bem vindo(a) à Central de Informações da Escola!");
});

app.get("/status", (req, res) => {
    res.json(status);
});

app.get("/escola", (req, res) => {
    res.json(escola);
});

app.get("/cursos", (req, res) => {
    res.json(cursos);
});

app.get("/professor", (req, res) => {
    res.json(professor);
});

app.get("/ajuda", (req, res) => {
    res.send(`Rotas disponíveis:
              / - Página inicial, 
              /status - Estado do servidor, 
              /escola - Informação da instituição, 
              /cursos - Informações do professor,
              /ajuda - Orientações`);
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});