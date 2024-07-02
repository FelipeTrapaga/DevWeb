// backend/index.js

const express = require('express');
const router = require('./router');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 5000;
const dataPath = path.join(__dirname, 'data', 'books.json');

app.use(express.json());

// Rotas da API
app.use('/api/books', router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
