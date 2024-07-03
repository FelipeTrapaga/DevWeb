import React, { useState, useContext } from 'react';
import { BookContext } from '../BookContext';

const AddBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, isbn };
    addBook(newBook); // Adiciona o novo livro usando o contexto BookContext
    setTitle('');
    setAuthor('');
    setIsbn('');
    alert('Livro adicionado com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Livro</h2>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddBookForm;
