const express = require("express");
const cors = require("cors"); // Importe o cors
const app = express();
const PORT = 3000;

// Use o middleware cors para permitir requisições do frontend
app.use(cors());

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Simulação de um banco de dados em memória
const notesDB = [];
let noteIdCounter = 1;

// Endpoint POST para criar uma nova nota para um cliente
app.post("/clients/:clientId/notes", (req, res) => {
  const clientId = req.params.clientId;
  const { text } = req.body;

  // Validação básica: o texto da nota não pode ser vazio
  if (!text) {
    return res
      .status(400)
      .json({ error: "O texto da nota não pode ser vazio." });
  }

  const newNote = {
    id: noteIdCounter++,
    text,
    clientId,
    createdAt: new Date(),
    userId: 1,
  };

  notesDB.push(newNote);

  res.status(201).json(newNote);
});

// Endpoint GET para listar todas as notas de um cliente
app.get("/clients/:clientId/notes", (req, res) => {
  const clientId = req.params.clientId;
  const clientNotes = notesDB.filter((note) => note.clientId === clientId);
  res.status(200).json(clientNotes);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
