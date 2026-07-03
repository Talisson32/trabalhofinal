// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // permite que o GitHub Pages chame essa API
app.use(express.json());

let ledState = false; // false = desligado, true = ligado

app.post('/led/on', (req, res) => {
  ledState = true;
  res.json({ status: 'ligado' });
});

app.post('/led/off', (req, res) => {
  ledState = false;
  res.json({ status: 'desligado' });
});

app.get('/led/status', (req, res) => {
  res.json({ led: ledState });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));