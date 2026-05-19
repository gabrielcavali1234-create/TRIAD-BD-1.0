const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Serve os arquivos do build do Vite (pasta dist)
app.use(express.static(path.join(__dirname, 'dist')));

// Qualquer rota não encontrada retorna o index.html do frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
