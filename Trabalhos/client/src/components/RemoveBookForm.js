import React, { useState } from 'react';
import API_URL from '../config';

const RemoveBookForm = () => {
  const [bookId, setBookId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/books/${bookId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Livro removido com sucesso!');
        setBookId('');
      } else {
        alert('Erro ao remover o livro.');
      }
    } catch (error) {
      alert('Erro ao remover o livro.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Remover Livro</h2>
      <input
        type="text"
        placeholder="ID do Livro"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
        required
      />
      <button type="submit">Remover</button>
    </form>
  );
};

export default RemoveBookForm;
