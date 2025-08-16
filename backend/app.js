const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const notesDB = [];
let noteIdCounter = 1;

app.post("/clients/:clientId/notes", (req, res) => {
  const clientId = req.params.clientId;
  const { text } = req.body;

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

app.get("/clients/:clientId/notes", (req, res) => {
  const clientId = req.params.clientId;

  const clientNotes = notesDB.filter((note) => note.clientId === clientId);

  res.status(200).json(clientNotes);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
