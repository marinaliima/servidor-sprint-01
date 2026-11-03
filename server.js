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

const mensagens = [
  { id: 1, usuario: "Ana", texto: "Bom dia!" },
  { id: 2, usuario: "Pedro", texto: "Olá!" },
  { id: 3, usuario: "Maria", texto: "Tudo bem?" },
  { id: 4, usuario: "Lucas", texto: "Como vai?" },
  { id: 5, usuario: "Carla", texto: "Até logo!" }
];

function listarMensagens() { return mensagens; }

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

app.get("/sobre", (req, res) => { 
   res.send("Projeto Mensageiro Local");
});

app.get("/mensagens", (req, res) => { 
   res.json(listarMensagens());
});

app.get("/mensagens/:id", (req, res) => {
   const mensagem = mensagens.find(m => m.id === Number(req.params.id));
   if (!mensagem) return res.status(404).json({ erro: "Não encontrada" });
   res.json(mensagem);
});

app.get("/total-mensagens", (req, res) => { 
   res.json({ total: mensagens.length });
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});