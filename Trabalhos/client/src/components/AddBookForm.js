import React, { useState } from 'react';
import API_URL from '../config';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = { title, author, isbn };

    try {
      const response = await fetch(`${API_URL}/books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });

      if (response.ok) {
        alert('Livro adicionado com sucesso!');
        setTitle('');
        setAuthor('');
        setIsbn('');
      } else {
        alert('Erro ao adicionar o livro.');
      }
    } catch (error) {
      alert('Erro ao adicionar o livro.');
    }
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
