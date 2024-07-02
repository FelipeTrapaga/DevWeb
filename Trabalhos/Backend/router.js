// backend/router.js

const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'books.json');

// Rota para listar todos os livros
router.get('/books', async (req, res) => {
  try {
    const booksData = await fs.readFile(dataPath, 'utf8');
    const books = JSON.parse(booksData);
    res.json(books);
  } catch (err) {
    console.error('Erro ao buscar livros:', err);
    res.status(500).json({ error: 'Erro ao buscar livros' });
  }
});

// Rota para adicionar um novo livro
router.post('/books', async (req, res) => {
  try {
    const { title, author, isbn } = req.body;

    const booksData = await fs.readFile(dataPath, 'utf8');
    const books = JSON.parse(booksData);

    const newBook = { id: books.length + 1, title, author, isbn };
    books.push(newBook);

    await fs.writeFile(dataPath, JSON.stringify(books, null, 2));

    res.status(201).json(newBook);
  } catch (err) {
    console.error('Erro ao adicionar livro:', err);
    res.status(500).json({ error: 'Erro ao adicionar livro' });
  }
});

// Rota para remover um livro por ID
router.delete('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const booksData = await fs.readFile(dataPath, 'utf8');
    let books = JSON.parse(booksData);

    books = books.filter(book => book.id !== parseInt(id));

    await fs.writeFile(dataPath, JSON.stringify(books, null, 2));

    res.json({ message: `Livro com ID ${id} removido com sucesso` });
  } catch (err) {
    console.error('Erro ao remover livro:', err);
    res.status(500).json({ error: 'Erro ao remover livro' });
  }
});

module.exports = router;
