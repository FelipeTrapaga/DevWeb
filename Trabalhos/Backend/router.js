const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataPath = path.join(__dirname, 'data.json');

// Helper function to read data from JSON file
const readData = () => {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
};

// Helper function to write data to JSON file
const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

router.get('/books', (req, res) => {
  const data = readData();
  res.json(data.books);
});

router.post('/books', (req, res) => {
  const data = readData();
  const newBook = req.body;
  data.books.push(newBook);
  writeData(data);
  res.status(201).json(newBook);
});

router.delete('/books/:id', (req, res) => {
  const data = readData();
  const bookId = req.params.id;
  data.books = data.books.filter(book => book.id !== bookId);
  writeData(data);
  res.status(204).send();
});

router.get('/books/search', (req, res) => {
  const data = readData();
  const query = req.query.q.toLowerCase();
  const results = data.books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  );
  res.json(results);
});

module.exports = router;
