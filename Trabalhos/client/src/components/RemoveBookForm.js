import React, { useState } from 'react';

const RemoveBookForm = () => {
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/books/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao remover livro');
      }

      setId('');
      alert('Livro removido com sucesso!');
    } catch (error) {
      console.error('Erro ao remover livro:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Remover Livro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID do Livro" required />
        <button type="submit">Remover Livro</button>
      </form>
    </div>
  );
};

export default RemoveBookForm;
