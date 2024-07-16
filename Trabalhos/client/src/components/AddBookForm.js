import React, { useState, useContext } from 'react';
import { BookContext } from '../BookContext';

const AddBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author, year);
    setTitle('');
    setAuthor('');
    setYear('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Adicionar Livro</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titulo" />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Autor" />
      <input type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Ano" />
      <button type="submit">Adicionar Livro</button>
    </form>
  );
};

export default AddBookForm;
