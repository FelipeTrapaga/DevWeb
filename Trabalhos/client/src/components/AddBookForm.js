import React, { useState } from 'react';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, author, isbn }),
      });

      if (!response.ok) {
        throw new Error('Erro ao adicionar livro');
      }

      setTitle('');
      setAuthor('');
      setIsbn('');
      alert('Livro adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar livro:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Adicionar Livro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" required />
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Autor" required />
        <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} placeholder="ISBN" required />
        <button type="submit">Adicionar Livro</button>
      </form>
    </div>
  );
};

export default AddBookForm;
